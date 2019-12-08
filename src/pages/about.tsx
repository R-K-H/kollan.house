import IndexLayout from '../layouts';
import { graphql, Link, StaticQuery } from 'gatsby';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <StaticQuery
                query={graphql`
                  query ProfileQuery {
                    logo: file(relativePath: { eq: "img/kollan-profile.jpg" }) {
                      childImageSharp {
                        fluid(maxHeight: 800) {
                            ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                `}
                // tslint:disable-next-line:react-this-binding-issue
                render={(data: SiteNavLogoProps) => (
                  <div>
                    {data.logo ? (
                      <img src={data.logo.childImageSharp.fluid.src} alt="Kollan House" />
                      ) : (
                      <div></div>
                      )}
                  </div>
                )}
              />
              <p>
                As the son of a physician in the military, Kollan had been used to moving around.
                But he became the man of the house when he was only 5.  His parents were separating
                and as the older brother of two younger siblings, he felt it was up to him to help his
                mother.  Perhaps it was those early responsibilities that prepared him for a
                life of running things.
              </p>
              <p>
                Kollan grew up looking after his younger brother and sister while his mother worked long hours to support them. Often they had to rely on food stamps, but life was good apart from that.  What he recalls about his Christian elementary school was that his essay on the adaptation of plants got a low grade because it championed evolution, and such ideas were not welcome. However, his father in particular encouraged scientific thought, and became more of an influence when Kollan lived with him in Kentucky through his high school years.
              </p>
              <p>
                Kollan moved out on his own at 18, and suffered through a period of depression.  Engineering school called, and he started working to support himself. UPS, based in Kentucky, had program to fund students if they would work the third, overnight shift. Kollan was soon promoted to manager and took management training. Before too long he was supervising 40 people. 
              </p>
              <p>
                But it was difficult to keep up with his studies, and Kollan decided to focus on engineering. In his third year, his aptitude for business was evident as he started getting work building websites and helping people with their computers. He was ahead of the curve because he understood the value of having an online presence, but it was an uphill battle to persuade others.
              </p>
              <p>
                Kollan’s early goal was to build spaceships. He had wanted to be pilot, and he earned his private pilot’s license.  He also loved to make things with his hands, and won an art scholarship – which he declined because he realized that he was unlikely to turn it into a successful career.  Elon Musk was his hero and it was the early days of Burt Rutan’s race into space. When he realized that it took a million dollars to fund space travel, and that it was mainly wealthy businessmen who had those resources, he turned his attention to business studies. 
              </p>
              <p>
                Around this time, Kollan’s father was involved in some startups, such as a black limo taxi service for airline passengers. Kollan worked with him and learned quickly that there were a lot of regulatory bodies who needed to be satisfied.  Ultimately, that business failed, but it gave him a good idea of what was needed to survive.  He and a friend started another limo service, this time shuttling people around who were attending the Kentucky Derby. However, his friend proved unreliable, and he left Kollan to deal with a shambles. 
              </p>
               <p>
                Kollan was left feeling depressed and living in his parents basement. Even with help for the depression, he could find no meaning in his life, and he attempted suicide.  He was saved from a fatal  jump from a 7-storey building by getting caught up in some wires. He was surrounded by love as a result and it was almost as though he had died and gone to heaven.  People were worried that he would try suicide again, but he felt he had survived his best efforts to kill himself, so he focused on finding meaning by reading such authors as Eckhart Tolle.
              </p>
              <p>
               Life took a new turn when Kollan met his future business partners at a Hackathon in Washington. They invited him to move from Kentucky to join them in Baltimore to work in the field of cryptocurrency. Even though he was still limping from his fall, he moved in with them in their cramped quarters and that was the start of a very exciting time when they motivated each other to do well.
              </p>
              <p>
               Then Kollan came to BC - During the past 4 years in BC, Kollan has struggled to be a successful entrepreneur and feels he has grown and found his own voice.  He has discovered that there is a greater willingness to collaborate on the west coast and fewer man-eat-man business dealings. 
              </p>
              <p>
               Kollan has worn many different hats, and has develop his innate abilities to be adaptable and problem solve.  He has enjoyed applying the scientific method he learned as an engineer to efficiently solve challenges that involve humans. Now Kollan has a 20-year plan to be successful in business – and he then he wants to build a spaceship.
              </p>
              <p>
               Kollan’s fascination with the operational side of business stems from his childhood, when he spent many hours figuring out how to build and launch a spaceship. His love of science and of running projects comes from those early days too. As a young engineering student, he paid for his tuition by working part-time for UPS, and was supervising a team of 40 people before he left. That management experience paid off when Kollan turned his attention to building online businesses and successful ventures in the world of cryptocurrencies. Looking for more meaning in his work, Kollan is now committed to the values of conscious capitalism. The spaceship will still have to wait while he launches new initiatives to address the challenges right here on earth.
              </p>
              <ul>
                <li>
                  Raised and educated in Kentucky.
                </li>
                <li>
                  Early commitment to the environment and scientific solutions.
                </li>
                <li>
                  Ran a home from a young age to help his single mother and younger siblings.
                </li>
                <li>
                  Excelled at managing UPS teams, focussing on logistics.
                </li>
                <li>
                  Studied engineering at university.
                </li>
                <li>
                  Lead a number of successful startups.
                </li>
                <li>
                  Built online businesses assisting others to benefit from web traffic.
                </li>
                <li>
                  Used his entrepreneurial talents to thrive in the world of cryptocurrencies.
                </li>
              </ul>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
