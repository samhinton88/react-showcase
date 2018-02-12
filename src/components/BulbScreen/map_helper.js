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

const T = wHoz(0).concat(wVer(4))
const F = wHoz(0).concat(wHoz(3).concat(wVer(0)))
const H = wHoz(4).concat(wVer(0)).concat(wVer(8))
const C = wHoz(0, 1, 7).concat(wVer(0, 1, 7)).concat(wHoz(8, 1, 7))
          .concat([[1,7]]).concat([[1,1]]).concat(wHoz(1, 7, 2))
          .concat(wHoz(7, 7, 2)).concat([[8,6]]).concat([[8,2]])



const test = C
const square = writeLine([0,0], [8,0]).concat( writeLine([0,0], [0,8]), writeLine([0,8], [8,8]), writeLine([8,0], [8,8]))
const line = writeLine([0,0], [1,5])




function writeLine(start, finish) {
  const [ startX, startY ] = start;
  const [ finishX, finishY ] = finish;
  const map = []

  if (startX !== finishX && startY !== finishY) {
    // diagonal


  }

  for (let i = startX; i <= finishX; i++) {
    for (let j = startY; j <= finishY; j++) {
      map.push([i,j])
    }
  }

  return map
}

function wHoz(y, start = 0, size = null) {



  const finish = !size  ? 8 : start + size - 1;
  return writeLine([start,y], [finish,y])
}

function wVer(x, start = 0, size = null) {

  const finish = !size  ? 8 : start + size - 1;
  return writeLine([x,start], [x, finish])
}

export {A, S, writeLine, square, line, T, test};

































