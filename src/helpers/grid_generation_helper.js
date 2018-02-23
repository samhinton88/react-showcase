function makeGrid(width, areaPrefix = 'pos') {
  const area = width * width;
  const map = [];
  const positions = []

  for (let i = 0; i < area; i++) {
    const xPos = i % width;
    const yPos = Math.floor(i / width );
    const gridPos = String(xPos) + String(yPos)
    positions.push(gridPos)
    map.push(`${areaPrefix}${gridPos}`)
  }

  const lines = [];

  for (let i = width; i <= area; i += width) {
    lines.push(map.slice(i - width, i))
  }

  const joinedLines = lines.map((line) => line.join(' '));

  const template = `'${joinedLines.join("' '")}'`
  return {template, map, positions}
}

export default makeGrid
