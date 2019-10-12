import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { titleP1, titleP2, titleP3, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          titleP1
          titleP2
          titleP3
          description
          position
        }
      }
    }
  `)

  return (
    <S.profileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          <S.p1>{titleP1}</S.p1>
          <S.p2>{titleP2}</S.p2>
          <S.p3>{titleP3}</S.p3>
        </S.ProfileAuthor>
        <S.ProfilePosition>{position}</S.ProfilePosition>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.profileWrapper>
  )
}

export default Profile
