import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio(props) {
  return (
    <StaticQuery
      query={CustomHeaderQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className={props.styleClass}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: '100%',
              }}
            />
          </div>
        )
      }}
    />
  )
}

const CustomHeaderQuery = graphql`
  query CustomHeaderQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
