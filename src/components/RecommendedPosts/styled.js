import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d;
  background: #192734;
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: #3b3c40;
  color: #1fa1f2;
  display: flex;
  padding: 2rem 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    background: #252526;
  }
  &.previous {
    border-right: 1px solid #252526;
  }
  &.next {
    justify-content: flex-end;
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
