import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import * as S from "./styled"

import getThemeColor from "../../utils/getThemeColor"

const Profile = () => {
  const {
    site: {
      siteMetadata: { titleP1, titleP2, titleP3, position, description, mail },
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
          mail
        }
      }
    }
  `)

  return (
    <S.profileWrapper>
      <S.ProfileLink
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        to="/"
      >
        <Avatar />
        <S.ProfileAuthor>
          <S.p1>{titleP1}</S.p1>
          <S.p2>{titleP2}</S.p2>
          <S.p3>{titleP3}</S.p3>
        </S.ProfileAuthor>
        <S.ProfilePosition>{position}</S.ProfilePosition>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
      <S.ProfileMail href="mailto:contato@alexandnrelima.dev">{mail}</S.ProfileMail>
    </S.profileWrapper>
  )
}

export default Profile
