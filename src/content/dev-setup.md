---
title: "Development Setup"
author: Kollan
tags: ["Development"]
image: img/cedric-letsch-pORU_eRvvQ4-unsplash.jpg
date: "2019-12-09T10:00:00.000Z"
draft: true
---

# Git
First is I love to work in git, it’s honestly one of the greatest things for history, rollbacks, deploys etc. If you’re working from a non-git folder or install, I would pull down from the server, setup a private repo on github and then do a git init and set the remote to the newly created git. This will provide you with a way to interface with this repository, you can add other people to it, you can manage issues etc.

A few notes here you’ll need to be in terminal, do:

```
git init
git add .
git commit -am "first commit"
git remote add origin <your url in github project>
git push -u origin master
```

This will effectively add all the files and push them to the origin which is located on github. Now whenever you make a change (which isn’t testing just fiddling around, but good work which you want to save progress on), you just do a `git commit -am “<message>”` and you should be good to go once you’re ready to do a git push origin master.

I won’t be going over branches in this document, but I would be happy to explain in detail how branching works, why it’s good to use etc.

# Development Environment
## Containerization
I almost always use Docker (https://www.docker.com/) for my development. An easier way to understand how it works is that instead of installing everything into one system (say into the operating system) you can build instead your web server into its own isolated environment, for example if it needs a different version of linux, or a special module which conflicts with something else you want to do. This also allows you to bring down a service like your web server, and still operate the database without shutting it down, allowing for rolling updates or adjustments to core services without disrupting others. This also allows for scale, too many requests? Well let’s just add another container with another webserver in it, these are some of the cool things you can do with containers.

Why do you choose to use it for development? It’s quite simple, space and control, first you’re not building entire virtual machines here, so you’re building slimmed down versions of linux with bare requirements for the system to work. Second you can control almost every aspect of what you need to get a service to run. Does your application require PHP 5.6 and PHP7? Well we can run two different containers and don’t need to mess with one which might mess with the other as if it was on the same system. This also means we really don’t care where this system operates either, as long as docker can be installed, you don’t care anything about the server where it’s located (making dev and production environments almost irrelevant).

### LEMP
So for most PHP applications you’ll be using LEMP / LAMP, although I would say for more common use today Nginx is preferred so a LEMP stack is what you’ll more likely run into. While both Apache and Nginx are web servers, they slightly vary with respect to their configuration files and abilities, though almost all of them match one another these days.

For a bit of a howto this link https://www.howtoforge.com/tutorial/dockerizing-lemp-stack-with-docker-compose-on-ubuntu/ provides good information, if you’re just getting started though I would honestly just look at this which is where someone has already setup a containerized LEMP stack https://github.com/atillay/docker-lemp. You can look in the docker-compose.yml to see how things are setup, how many containers are running etc. It’s just a configuration file and with that it knows where to pull things from, what it needs to do with ports etc. It can be quite overwhelming, but it’s super powerful when you want to build.

#### Setup
Install Docker - https://docs.docker.com/docker-for-mac/install/
Install ctop - https://github.com/bcicen/ctop (I like ctop as it’s like top but for containers so you can just type in ctop and get a list of running containers and get into each one with more information)

Docker has a nice GUI tool if you’re uncomfortable with the command line called Kitematic https://kitematic.com/ which I think will come bundled with the Docker install, if not you can install the Docker Toolbox with the Kitematic link.

Once that’s installed you’ll see something in the top left of your toolbar which will look like a little whale, from there you can control things like restarting, updating Docker as a whole.

Some quick commands for docker are:

`docker build <container name>` (you can also use this as docker build if you only have one dockerfile in the directory)
`docker exec -it <container name> bash` (essentially sshes you into the container, word of warning here, while it will look like a normal linux system, it may not have things which you would expect)

From here we’ll want to create either individual dockerfiles or use docker compose, I’ll provide both as examples, however for a project that requires certain things, I typically go with docker compose, however if you have several projects it might be best to keep things like your DB in its own container and not build one for each of your projects, that just depends on how you want to configure things, if you run more than one DB container you’ll need to setup the ports otherwise you’ll get an error where the container is trying to listen on a port which is already taken (and it won’t boot up).

Dockerfiles are essentially recipes instructing how to build the system. They will typically start with a base image, for example https://hub.docker.com/_/nginx is a prebuilt Dockerfile for nginx, MOST of the time these are sufficient for your day to day use but if you need more control you might build off of linux first and config for additional things you need.

To follow along with the Nginx example:

FROM debian:buster-slim

This section right here is essentially saying get this installation and build on top of that. Everything than follows from is building on top of what you retrieved in from.
