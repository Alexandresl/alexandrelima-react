import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--background);
  box-shadow: 0 0 4px var(--black);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 50px;
  transition: background 0.5s;

  ${media.lessThan("medium")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
    border-top: 1px solid var(--borders);
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("medium")`
    flex-direction: row;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  transition: color 1s;
  &.light {
    color: #d4d400;

    &:hover {
      color: #ffa500;
    }
  }

  &:hover {
    color: #1fa1f2;
  }

  &.display {
    ${media.lessThan("medium")`
      display: none;
    `}
  }
  ${media.greaterThan("medium")`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan("medium")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`
