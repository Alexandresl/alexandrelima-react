import React, { useState, useEffect } from "react"

import Icons from "./icons"
import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)
    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          cover
          direction="right"
          bg="var(--mediumBackground)"
          duration={0.6}
          to="/"
          title="Voltar para a Home"
        >
          <S.MenuBarItem>
            <Icons.Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          cover
          direction="right"
          bg="var(--mediumBackground)"
          duration={0.6}
          to="/search/"
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <Icons.Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          {isDarkMode ? <Icons.Light /> : <Icons.LightSolid />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar a Visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {isListMode ? <Icons.Grid /> : <Icons.List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo">
          <Icons.Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar