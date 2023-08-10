/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">

      {author?.name && (
        <p>
            <br></br>
            Ali is a fourth-year student at the University of Ottawa pursuing an Honours BSc in Computer Science with an Engineering Management and Entrepreneurship option. (2023)
            <br></br>
            <br></br>
            Ali is a fourth-year student at the University of Ottawa pursuing a BASs in Software Engineering with an Engineering Management and Entrepreneurship Option. (2018 - 2022)
        </p>
      )}
    </div>
  )
}

export default Bio
