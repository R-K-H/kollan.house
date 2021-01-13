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
  button {
    border: 1px solid #000;
  }
`;

const Contact: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Contact</title>
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
            <PostFullTitle>Contact</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
            <div className="form">
              <form name="contact" method="POST" data-netlify="true">
                <p>
                  <label>Name <input type="text" name="name" /></label>
                </p>
                <p>
                  <label>Email <input type="email" name="email" /></label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
              </div>
              <div className="info">
                <p>kollanh [at] gmail [dot] com</p>
                <p>plus one five zero too - two nine four - five seven five one</p>
              </div>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Contact;
