import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              marginBottom: rhythm(2.5),
            }}
          >
            <h2> A little bit about me</h2>
            <div>
              Frontend Engineer at{' '}
              <a href="https://gridle.io/" target="_blank">
                Gridle
              </a>
              . Passionate about JavaScript, React Ecosystem, and Web perf.{' '}
              <a href={`https://twitter.com/${social.twitter}`}>
                Connect with me on Twitter
              </a>
            </div>

            <h2>... living in beautiful land of India</h2>
            <div className="d-flex-align">
              <div className="dib">
                <Image
                  fixed={data.elephant.childImageSharp.fixed}
                  alt={author}
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: '100%',
                  }}
                />
              </div>
              <div className="dib f-15">📍 Ahmedabad,Gujarat</div>
            </div>

            <h2> Favorites and loves to ...</h2>
            <div>
              <ul>
                <li>Build things and OSS lover</li>
                <li>Competetive programming</li>
                <li>Write articles</li>
                <li>Marvel movie(s) buff</li>
                <li>Watch football(Premier League) on weekends</li>
              </ul>
              <div className="db f-15">
                <a
                  className="custom-anchor "
                  href="https://in.linkedin.com/in/meet-zaveri-0839a511a"
                  target="_blank"
                >
                  <i className="dib mr1 fa fa-linkedin" />
                </a>
                <a
                  className="custom-anchor "
                  href="https://github.com/meetzaveri"
                  target="_blank"
                >
                  <i className="dib mr1 fa fa-github" />
                </a>
                <a
                  className="custom-anchor "
                  href="https://medium.com/@meetzaveri"
                  target="_blank"
                >
                  <i className="dib mr1 fa fa-medium" />
                </a>
                <a
                  className="custom-anchor "
                  href="https://stackoverflow.com/users/7121483/meet-zaveri"
                  target="_blank"
                >
                  <i className="dib mr1 fa fa-stack-overflow" />
                </a>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    elephant: file(absolutePath: { regex: "/asset-old-city.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
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
