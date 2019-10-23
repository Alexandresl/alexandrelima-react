import React, { useState, useEffect } from "react"

import getThemeColor from "../../utils/getThemeColor"

import Icons from "./icons"
import * as S from "./styled"

const MenuBar = () => {
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
          bg={getThemeColor()}
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
          bg={getThemeColor()}
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
          itle="Mudar o Tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")

            if (window.DISQUS !== undefined) {
              window.setTimeout(() => {
                window.DISQUS.reset({
                  reload: true,
                })
              }, 300)
            }
          }}
          className={theme}
          isDarkMode={isDarkMode}
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
        <S.MenuBarItem
          title="Ir para o topo"
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" })
          }}
        >
          <Icons.Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
