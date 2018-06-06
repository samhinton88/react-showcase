function createResource (data) {
    console.log('this in createResource', this)
    const {resources, menu: {left, top}, colorArray} = this.state;
    const color = colorArray[Math.floor(Math.random()*colorArray.length)]
    let { resourceIndex } = this.state;
    // menu: left, top is the position user is attempting to insert component
    let candidateLeft = left, candidateTop = top;
    let xNudge = 0, yNudge = 0;
    resources.forEach((resource) => {
      const { canvasPos, name } = resource;
      console.log('menu candidate',[candidateLeft, candidateTop], 'possible clash', name, canvasPos)
      const xTooClose = Math.abs(candidateLeft - canvasPos[0]) < 20;
      const yTooClose = Math.abs(candidateTop - canvasPos[1]) < 20;

      const toLeft = Math.sign((candidateLeft - canvasPos[0]) === 1) ? true : false;
      const toBottom = Math.sign((candidateTop - canvasPos[1]) === 1) ? true : false;

      if (toLeft  &&  xTooClose) {
        console.log('adjusting left from ', resource)
        xNudge += -130;
      }

      if (!toLeft && xTooClose) {
        console.log('adjusting right from ', resource)
        xNudge += 130;
      }

      if (toBottom && yTooClose) {
        console.log('adjusting down from ', resource)
        yNudge += 130;
      }

      if (!toBottom && yTooClose) {
        console.log('adjusting up from ', resource)
        yNudge += -130;
      }

      candidateLeft += xNudge;
      candidateTop += yNudge;
    });
    console.log('X changed from', left, 'to', candidateLeft)
    console.log('Y changed from', top, 'to', candidateTop)

    resourceIndex++

    const _resources = [...resources, { resourceIndex, name: `resource${resourceIndex}`, size: 100, canvasPos: [candidateLeft, candidateTop], colour: color}]
    this.setState({resources: _resources, resourceIndex})
  }

  export {createResource};
