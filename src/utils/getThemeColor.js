const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__them

  if (theme === "light") return "#f0f0f3"
  if (theme === "dark") return "#3B3C40"
}

export default getThemeColor
