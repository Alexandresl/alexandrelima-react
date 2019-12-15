import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 252) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar
