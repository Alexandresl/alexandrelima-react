import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--background);
  background: linear-gradient(150deg, var(--background) 0%, var(--background-grad) 100%);
  box-shadow: 0 0 4px var(--black);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 20px;
  text-align: center;
  width: 300px;

  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
    border-bottom: 1px solid var(--borders);
    border-right: none;
  `}
`
