import IndexLayout from '../layouts';
import { graphql, Link, StaticQuery } from 'gatsby';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/react';

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
                render={(data) => (
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
                Kollan became the man of the house when he was 5. His parents separated, and as the oldest sibling he felt it was up to him to help his mother. Those early responsibilities prepared him for a life of running things.
                As a young engineering student, he paid for his tuition by working part-time for UPS. He ran a team of 30 people by the time he left. Since then, Kollan has run many other businesses including market making, liquidators, validators
                and most recently MetaDAO. The world's first market governed organization.
              </p>
              
              <h2>SUMMARY</h2>
              <p>
                Highly skilled in the technology industry with mastered abilities for strategic planning,
                team ­oriented project management, individual professional development and thoughtful
                leadership directed towards corporate success. He's developed company recruitment, onboarding,
                training and culture processes and systems. With 10+ years experience building B2B solutions
                such as merchant services, applications, brand identity, marketing, business analysis, eCommerce,
                web and application development, print materials, and even event planning.
              </p>
              <h2>SKILLS</h2>
              <ul>
                <li>Strategic Planning</li>
                <li>Quality Control</li>
                <li>Process Improvement</li>
                <li>Budget Planning & Cost Control</li>
                <li>Project Management</li>
                <li>Product Management</li>
                <li>Client Relations</li>
                <li>Market Analysis</li>
                <li>Conflict Resolution</li>
                <li>Crisis Management</li>
                <li>Marketing Strategy Development</li>
                <li>Business Analysis</li>
                <li>Management</li>
                <li>Team Building</li>
                <li>Data Analytics</li>
                <li>Business Development</li>
                <li>Social Media Marketing</li>
                <li>Financial Management</li>
              </ul>
              
              <h2>EDUCATION</h2>
              <p>(Incomplete) Mechanical Engineering - 2006-2009
              University of Louisville - J. B. Speed School of Engineering</p>

              <h2>CERTIFICATIONS</h2>
              <ul>
                <li>
                  <p>
                    Private Pilots License (3536247)
                  </p>
                  <p>
                    Federal Aviation Administration
                  </p>
                </li>
                <li>
                  <p>
                    Certified Bitcoin Professional (9cf17c)
                  </p>
                  <p>
                    CryptoCurrency Certification Consortium
                  </p>
                </li>
              </ul>
              <h2>LINKS</h2>
              <ul>
                <li><a href="https://github.com/R-K-H/">Github</a></li>
                <li><a href="https://www.linkedin.com/in/kollan/">Linkedin</a></li>
                <li><a href="https://angel.co/kollan-house">Angel.co</a></li>
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
