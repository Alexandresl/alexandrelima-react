import React from "react"
import propTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink
        cover
        direction="right"
        bg="var(--mediumBackground)"
        duration={0.6}
        to={prevPage}
      >
        &larr; Página anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink
        cover
        direction="left"
        bg="var(--mediumBackground)"
        duration={0.6}
        to={nextPage}
      >
        próxima página &rarr;
      </AniLink>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination