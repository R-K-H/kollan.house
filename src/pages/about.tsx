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
                As the son of a physician in the military, Kollan had gotten used to moving around.
                But he became the man of the house when he was only 5.  His parents were separating
                and as the older brother of two younger siblings, he felt it was up to him to help his
                mother.  Perhaps it was those early responsibilities that prepared him for a
                life of running things.
              </p>
              
              <p>
               Kollan has worn many different hats, and has develop his innate abilities to be adaptable and
               problem solve.  He has enjoyed applying the scientific method he learned in school for engineering to
               efficiently solve challenges that involve humans. Now Kollan has a 20-year plan to be successful
               in business – and then he wants to build spaceships.
              </p>
              <p>
               Kollan’s fascination with the operational side of business stems from his childhood,
               when he spent many hours figuring out how NASA could build and launch spacecraft. His love of
               science and of running projects comes from those early days too. As a young engineering student,
               he paid for his tuition by working part-time for UPS, and was supervising a team of 30 people
               before he left. That management experience paid off when Kollan turned his attention to building
               online businesses and successful ventures in the world of cryptocurrencies.
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
              <h2>WORK HISTORY</h2>
              <h3>Investabit Capital, Inc. (CTR Group)</h3>
              <h4>Chief Operating Officer</h4>
              Toronto, Ontario | Victoria, British Columbia
              2017 - 2019
              <p>Startup focused on Machine Learning and Artificial Intelligence based CryptoAsset investing technology. Developed the business practices and systems, deploying GSuite, Wrike, Github and Slack for team management. Built employee contracts, contractor agreements, LOIs, and partnership agreements. Ran sprint planning, culture exercises, day to day operations, as well SR&ED grant application (awarded $300k in Tax Credits).
              </p>
              <h3>CTR Capital (CTR Group)</h3>
              <h4>Chief Operating Officer</h4>
              Victoria, British Columbia
              2018 - 2019
              <p>Startup venture capital fund and investment portfolios (specializing in CryptoAssets). Developed investment tracking, onboarding, marketing and performance reporting. Worked with the General Partners to develop the investment thesis based on the UNs 17 SDGs. Performed due diligence on over 50 deals as well as managed the process and structure for deal flows. Assisted in the solicitation and raise of $2.5M+.
              </p>
              <h3>Abundance Digital (CTR Group)</h3>
              <h3>Management Consultant</h3>
              Victoria, British Columbia
              2017 - 2018
              <p>Consulted to develop automation for the deployment of a large number of advertising accounts across many different networks, leveraging hardware and software solutions. Lead the development and integration for automated transaction processing using PLAID for account management and advertising spend. Developed SQL queries to analyze account performance and business statistics for identifying troubled advertisers and potential fraud.
              </p>
              <h3>Adlumix</h3>
              <h3>Management Consultant</h3>
              Vancouver, British Columbia
              2015 - 2017
              <p>Consulted with team for the development of obfuscation techniques to circumvent detection technologies for advertising accounts. Provided technology to allow advertisers to circumvent such restrictions and policies.
              </p>
              <h3>Conscious Thought Revolution (CTR)</h3>
              <h3>Partner</h3>
              Vancouver, British Columbia
              2015 - 2019
              <p>CTR is an umbrella company which owns and operates several businesses in the technology space. Within the company group I was responsible for the development of Human Resources initiatives, culture development, corporate organization, messaging, branding and content curation. We developed a world class recruiting and onboarding process of which for the corporate entities have interviewed over 300 people and hired 15+ (fired 5).
              </p>
              <h3>AllZenn</h3>
              <h3>Co-Founder</h3>
              Baltimore, Maryland
              2014 - 2015
              <p>Startup focused on the management of web based business identity, branding and marketing. Developed hiring protocol, trained designers, designed and developed client pitches, designed brand and identity development, operated advertising and digital marketing accounts.
              </p>
              <h3>Emercor</h3>
              <h3>Co-Founder</h3>
              Baltimore, Maryland
              2014 - 2015
              <p>Startup focused on CryptoAsset market, management consulting, investment fund and technology. Developed project proposals, maintained client relationships, due diligence and research, economical modeling, technology assessment.
              </p>
              <h3>Calobrace Plastic Surgery Center</h3>
              <h3>Social Media & Technology Specialist</h3>
              Louisville, Kentucky
              2008 ­- 2015
              <p>Plastic surgery center and medical spa servicing innovative treatments and personal well being. Responsible for web identity, branding and message management. Assessed and evaluated the performance of contracted advertising and marketing accounts. Lead the development of social media expansion and social media manager role. Advised and assessed technology implementation and future planning.
              </p>
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
                <li>https://github.com/R-K-H/</li>
                <li>https://www.linkedin.com/in/kollan/</li>
                <li>https://angel.co/kollan-house</li>
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
