import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background: var(--mediumBackground);
  color: #1fa1f2;
  display: flex;
  padding: 2rem 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    background: var(--background);
  }
  &.previous {
    border-right: 1px solid var(--borders);
  }
  &.next {
    justify-content: flex-end;
    align-self: flex-end;
    border-left: 1px solid var(--borders);
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
