import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Articles = () => {
  const data = useStaticQuery(
    graphql`
      {
        allNodeArticle {
          edges {
            node {
              id
              title
              body {
                value
              }
              field_image {
                alt
                height
                title
                width
              }
              relationships {
                field_image {
                  uri {
                    url
                    value
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const getArticles = () =>
    data.allNodeArticle.edges.map(({ node }) => (
      <article key={node.id}>
        <h2 style={{ textAlign: "center" }}>{node.title}</h2>
        <img
          alt={node.field_image.alt}
          src={`http://drupatsby.local${node.relationships.field_image.uri.url}`}
        />
        <div style={{ whiteSpace: "pre-wrap" }}>{node.body.value}</div>
        <br />
      </article>
    ))

  return (
    <Layout>
      <SEO title="Article" />
      <h1>Articles</h1>
      {getArticles()}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Articles
