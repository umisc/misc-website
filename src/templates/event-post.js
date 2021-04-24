import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../styles/blog.sass";

export default function Template({ data, pageContext }) {
  const { markdownRemark: post } = data;
  const { prev, next } = pageContext;
  return (
    <Layout>
      <div className="blog-post-container">
        <SEO title={`MISC - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <br />
          <div className="blog-post-header">
            <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
            <h1 className="title">{post.frontmatter.title}</h1>
          </div>
          <hr className="blog-header-separator" />
          <br />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr />
          <div className="blog-post-footer">
            {prev && (
              <Link to={prev.frontmatter.path} rel="prev" className="prev-link">
                ← {prev.frontmatter.title}
              </Link>
            )}
            {next && (
              <Link to={next.frontmatter.path} rel="next" className="next-link">
                {next.frontmatter.title} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const postQuery = graphql`
  query EventPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
