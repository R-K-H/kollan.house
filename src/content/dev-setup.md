---
title: "Development Setup"
author: Kollan
tags: ["Development"]
image: img/maksym-kaharlytskyi-Q9y3LRuuxmg-unsplash.jpg
date: "2020-01-31T10:00:00.000Z"
draft: false
---

You know I’ve read a lot of posts about setup, I’ve done a lot of copy pasting and in general I’ve really enjoyed to see how people solve their problems. I wanted to use that as a launch point for a few new posts about how I go about work, what I use, how I’ve solved some problems (and by no means elegant) just for the sake of practice and hopefully informative for you dear audience member.

I’d love to hear how I could have done something better, or why I should do something another way, I’m no developer, I’ve rarely worked in teams for development so I’m rather limited on my “proper” way to do things. So in summary, be nice, but be hard. I’m here to learn and I can’t wait to come back to these in a year and see what I see differently.

# Hardware
Mid 2014 MacBook Pro 15” - i7 2.2GHz 16GB Ram and 250GB SSD

# Software
Now this thing could be a beast in of itself, how far down the rabbit hole of software do you go? I guess I’ll try to touch on the main points and maybe fill in if needs be.

## MacOS
I started on Mac maybe a few years ago, and coming from Windows it was a lot nicer for using it like Linux. Now Windows has the Ubuntu subsystem which is nice, but it’s still quite a pain with Docker (when I last used it). I do really like homebrew with Mac, making things easy to install, although I try to do things like that as sparingly as possible, if I’m going to setup development and need to use a software, I’ll almost always try to move it into a container (Docker). I like that approach as it doesn’t mess up my base system (host machine) with all kinds of strange tendrils. Even now with Golang I’ve found it super easy to just let the docker container do it’s thing (which was not the case a year ago, Go was messing up my dev setup and structure of how I do things). Anyways, I’m very happy with the Mac ecosystem, happy with the hardware and keeping things simple.

## [Sublime Text](https://www.sublimetext.com/)
I know a lot of stuff these days may be considered better or more complete or yada yada, I’m just really happy with my setup and the plugins and how I use it. It did take me quite a long time to get to this point, but I think I like a stripped down text editor and then building it up as kinda a fun, mix and match (similar to the way I’ve seen people build their terminal with all kinds of fancy things). I will say it’s not for everyone given some of the new stuff out there now, but I like it and it gets the job done for me. Plus I paid for it it’s great tool and the developer deserves it.

## [Docker](https://www.docker.com/)
Yep, gotta have it. Although I’m not a great user of it, I’m not sure how things work exactly, how to save space, why I have so many images and things just sitting around. I mean I get through my system prune every so often, but I’d like to know more than I do right now as far as management goes. I use Docker Compose for my projects and have really liked it. I’m sure it might be better to use something like Jenkins or Ansible for my builds and management of it all but for the stuff I work on, it’s great to build three systems in their own way and be able to have them all run in their own containers.

## [Postico](https://eggerapps.at/postico/)
I’m a fan of my GUIs, and coming from MySQL into Postgres I just need to have something visually (I hope you’re getting a sense of what kind of person I am through all of this).

## [Oh My Zsh](https://ohmyz.sh/) and [iTerm](https://iterm2.com/)
Dunno someone set it up for me and I’ve stuck with it.

## [Postman](https://www.getpostman.com/)
Must have for any API requests and testings. I’ve really missed out on a long number of years by not having a tool like this and using it.

## Some of the more smaller things but still use very regularly
[Gatsby](https://www.gatsbyjs.org/) (React)

Their CLI tool and all the stuff just packed in together, just makes building sites so easy. Hot reloading so if you’re more on the front end it’s just really nice.

## Various websites
[Stack Overflow](https://stackoverflow.com/)

[Mozilla MDN](https://developer.mozilla.org/en-US/)

[Digital Ocean](https://www.digitalocean.com/) for their tutorials

w3Schools needs to die though I’ve seen the google script you can put in where you exclude, I just want it by default.

# So what’s my poison?
Mostly Node right now, I came from PHP and then into a bit of Ruby (Rails) back into PHP then the full swing over to JS. I like how hacky it is, the way the structure works and how forgiving I find it. But it does let me get into trouble where as something like Golang (which I recently built an API with) doesn’t let me. I was thinking about typescript and using that, the theme for this site and the site itself is typescript so I guess I’d just need a bit more experience on how to truly use it 100%.

I’m not sure I have a great excuse for why I like JS the way I do, but I do find it nice and like how the syntax is changing and shorthand for things, I think it’s cool.

So from here I think I’m going to go into some details in a few posts. More of how I’ve done things and then some code and solutions I’ve found which were pretty nifty (I didn’t see anyone solving it the way I have) and we can go from there.

- Git / Docker / Node / Postgres
- React / Gatsby / Netlify
- Building A Golang API Server
- Gatsby DataStore Without LocalStorage

