import styled from "styled-components"
import { Link } from "gatsby"

export const profileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`
export const ProfileLink = styled(Link)`
  color: var(--postColor);
  text-decoration: none;
  transition: color 0.5s;

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
`

export const p1 = styled.h1`
  color: #ba3f3f;
`

export const p2 = styled.h1`
  color: var(--postColor);
`

export const p3 = styled.h1`
  color: var(--highlight);
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.1rem;
  font-weight: 100;
`
export const ProfileDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.4;
  margin-top: 15px;
`
