import React from 'react'

export function gridWave(objects, Component, gridWidth, origin = 'top-left') {
  console.log(origin)

  const range = objects.length;
  const centerPointIndex = (range - 1) / 2;
  const topRightIndex = gridWidth - 1

  const animatedMap = objects.map((object, index) => {
    let xPos = index % gridWidth;
    let yPos = Math.floor(index / gridWidth);
    let distanceFromOrigin;

    switch (origin) {
      case 'top-left':
        distanceFromOrigin = xPos + yPos;
        break;
      case 'top-right':
        distanceFromOrigin = Math.abs(xPos - gridWidth) + yPos;
        break;
      case 'center':
        console.log('inside center switch in animation_helper')
        distanceFromOrigin =
          Math.abs(xPos - Math.floor(gridWidth / 2) ) +
          Math.abs(yPos - Math.floor(range / gridWidth / 2))
        break;
    }

    return (
      <Component
        key={ object.id }
        xPos={ xPos }
        yPos={ yPos }
        distanceFromOrigin={ distanceFromOrigin }
        data={ object }
      />
    )
  })
  return animatedMap;
}


