import React from 'react'

export function gridWave(objects, Component, gridWidth, origin = 'top-left', speedMod = 1) {
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
        distanceFromOrigin =
          Math.abs(xPos - Math.floor(gridWidth / 2) ) +
          Math.abs(yPos - Math.floor(range / gridWidth / 2))
        break;
      case 'swipe-down':
        distanceFromOrigin = yPos;
        break;
      case 'swipe-left':
        distanceFromOrigin = Math.abs(xPos - gridWidth)
        break;
      case 'swipe-right':
        distanceFromOrigin = xPos
        break;
      case 'swipe-up':
        distanceFromOrigin = Math.abs(yPos - (range / gridWidth));
        break;
      case 'walk-down':
        distanceFromOrigin = index;
        break;
      case 'walk-up':
        distanceFromOrigin =  Math.abs(index - range)
        break;
      case 'random':
        distanceFromOrigin = Math.floor(Math.random() * range);
        break;
    }
    const duration = String(
      ((distanceFromOrigin / (1/speedMod)) + speedMod * (distanceFromOrigin)) + (2 * speedMod)
    );
    return (
      <Component
        key={ object.id }
        xPos={ xPos }
        yPos={ yPos }
        distanceFromOrigin={ distanceFromOrigin }
        data={ object }
        duration={duration}
      />
    )
  })
  return animatedMap;
}


