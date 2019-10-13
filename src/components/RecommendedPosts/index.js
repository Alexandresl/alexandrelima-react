import React from "react"
import propTypes from "prop-types"
import * as S from "./styled"

const RecommendedPost = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        cover
        direction="left"
        bg="var(--mediumBackground)"
        duration={0.6}
        to={previous.fields.slug}
        className="previous"
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        cover
        direction="right"
        bg="var(--mediumBackground)"
        duration={0.6}
        to={next.fields.slug}
        className="next"
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPost.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPost
