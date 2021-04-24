import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner";

import "../styles/news.sass";

const NewsPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="MISC - News" />
      <Banner class_suffix="deep" />
      <div className="news-page-container">
        {posts.map(({ node: post }) => {
          return (
            <div className="news-page-item" key={post.frontmatter.path}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <div className="news-page-item-details">
                <span className="author">{post.frontmatter.author}</span>
                <span className="date">{post.frontmatter.date}</span>
                <hr />
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query NewsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            author
          }
        }
      }
    }
  }
`;

export default NewsPage;
