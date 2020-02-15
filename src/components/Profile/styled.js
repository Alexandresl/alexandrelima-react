import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const profileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`
export const ProfileLink = styled(AniLink)`
  color: var(--postColor);
  text-decoration: none;
  transition: color 0.5s;

  ${media.lessThan("large")`
    display: flex;
    text-align: left;  
  `}

  &:hover {
    color: var(--highlight);
  }
`
export const ProfileAuthor = styled.h1`
  font-size: 1.2rem;
  margin: 0.5rem auto 0.5rem;
  padding-bottom: 0.5rem;
  display: inline-flex;
  border-bottom: 1px solid var(--postColor);

  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
    border-bottom: none;
    line-height:  1.875rem;
  `}
`

export const p1 = styled.span`
  color: #ba3f3f;
`

export const p2 = styled.span`
  color: var(--postColor);
`

export const p3 = styled.span`
  color: var(--highlight);
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.1rem;
  font-weight: 100;

  ${media.lessThan("large")`
    display: none;
  `}
`
export const ProfileDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.4;
  margin-top: 15px;

  ${media.lessThan("large")`
    display: none;
  `}
`
