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

interface ArtworkTemplateProps {
  edges: {
    node: {
      id: number,
      name: string;
    }
  };
};

const Artwork: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Artwork</title>
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
            <PostFullTitle>Artwork</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
                <StaticQuery
                  query={graphql`
                    query AssetsPhotos {
                      artwork: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "img/artwork"}}) {
                        edges {
                          node {
                            id
                            name
                            childImageSharp {
                              fluid(maxHeight: 800) {
                                  ...GatsbyImageSharpFluid
                              }
                            }
                          }
                        }
                      }
                    }
                  `}
                  // tslint:disable-next-line:react-this-binding-issue
                  render={(data) => (
                    <div>
                      {data.artwork.edges.map(artwork => {
                        return (
                          <img key={artwork.node.id} src={artwork.node.childImageSharp.fluid.src} />
                         );
                      })}
                    </div>
                  )}
                />
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Artwork;
