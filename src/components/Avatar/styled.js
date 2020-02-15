import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  margin: auto;
  height: 8rem;
  width: 8rem;
  box-shadow: 0 0 4px var(--black);
  border: 1px solid var(--mediumBackground);

  ${media.lessThan("large")`
    height: 1.875rem;
    width: 1.875rem;
  `}
`
