const renderSVG = (genShape) => {
  console.log(genShape)
    return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${genShape.render()}
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      fill="${genShape.textColour}"
      font-size="2.5rem" letter-spacing="2"
      font-family="monospace">${genShape.logoText}
    </text>
  </svg>
  `
}
export { renderSVG }