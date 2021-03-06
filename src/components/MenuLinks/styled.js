import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`
export const MenuLinkItem = styled.li`
  padding: 2px 0;

  ${media.lessThan("large")`
    display: inline;
    margin: 0 5px `}

  .active {
    color: var(--highlight);
  }
`
export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`
