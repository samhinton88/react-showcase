const A = [
  [4,0],
  [3,1],
  [5,1],
  [3,2],
  [5,2],
  [2,3],
  [6,3],
  [2,4],
  [3,4],
  [4,4],
  [5,4],
  [6,4],
  [1,5],
  [7,5],
  [1,6],
  [7,6],
  [0,7],
  [8,7],
  [0,8],
  [8,8],
]

const S = [
  [8,1],
  [7,0],
  [7,1],
  [6,0],
  [5,0],
  [4,0],
  [3,0],
  [2,0],
  [1,0],
  [1,1],
  [0,1],
  [0,2],
  [0,3],
  [1,3],
  [2,3],
  [3,3],
  [3,4],
  [4,4],
  [5,4],
  [6,4],
  [6,5],
  [7,5],
  [8,5],
  [8,6],
  [8,7],
  [7,7],
  [7,8],
  [6,8],
  [5,8],
  [4,8],
  [3,8],
  [2,8],
  [1,8],
  [0,7]

]

const square = writeLine([0,0], [8,0]).concat( writeLine([0,0], [0,8]), writeLine([0,8], [8,8]), writeLine([8,0], [8,8]))
const line = writeLine([0,0], [8,0])
// writeLine([0,1], [8,0]) + writeLine([0,0], [0,8]) + writeLine([0,8], [8,8]) + writeLine([8,8], [8,0])
console.log(square)



function writeLine(start, finish) {
  console.log(start, finish)
  const [ startX, startY ] = start;
  const [ finishX, finishY ] = finish;
  const map = []

  for (let i = startX; i <= finishX; i++) {
    for (let j = startY; j <= finishY; j++) {
      map.push([i,j])
    }
  }
  console.log(map)
  return map
}

export {A, S, writeLine, square, line };

































