import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25,17,34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem; 
  a {
    color: #000;
    text-decoration: none;
  }

  h2 {
    margin-bottom: 0;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: rebeccapurple;
  }
`
const Listing_Query = graphql`
  query BlogPostListing {
    allMarkdownRemark(limit: 10, sort: {
      order: DESC
      fields:[frontmatter___date]
    })  {
        edges {
          node {
            excerpt
            frontmatter {
              date
              title
              slug
              
            }
          }
        }
      } 
    }

`


const Listing = () => (
  <StaticQuery
    query={Listing_Query}
    render={({ allMarkdownRemark}) => (
      allMarkdownRemark.edges.map(({node}) => (
        <Post key={node.frontmatter.slug}>
       <Link to={`/posts${node.frontmatter.slug}`}> 
          <h2>{node.frontmatter.title}</h2>
       </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        <Link class="read-more" to={`/posts${node.frontmatter.slug}`}>ReadMore</Link>
        </Post>
      ))
    )} 
  
  
  
  />
)
  


export default Listing