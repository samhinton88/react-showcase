const stepTowards = function(destination, step = 0.1) {

  const { anchorPosition } = this.state;
  const xDir = anchorPosition.x < destination.x ? 1 : -1;
  const yDir = anchorPosition.y < destination.y ? 1 : -1;
  const xDistToDest = Math.abs(anchorPosition.x - destination.x);
  const yDistToDest = Math.abs(anchorPosition.y - destination.y);
  const xStep = xDir * step;
  const yStep = yDir * step;
  anchorPosition.x += xStep;
  anchorPosition.y += yStep;

  this.track(anchorPosition)

}

const journeyTowards = function(destination, step = 0.01) {
  let count = 0
  let timeOut;
  while(
    (Math.floor(this.state.anchorPosition.x) !== Math.floor(destination.x) &&
     Math.floor(this.state.anchorPosition.y) !== Math.floor(destination.y)) &&
    count < 1000
  )
  {
    timeOut = setTimeout(
      () => {
        this.stepTowards(destination)
      },
      100
      )
    ;
    count += 1
  }
  clearTimeout(timeOut)
}

// focus the react eye towards a point on its viewBox
const track = function(coordinates) {
  const {
    pupilData,
    lidRightData,
    lidMidData,
    lidLeftData
  } = this.state;

  const { x, y } = coordinates;

  const glanceDistanceX = (x - 50) / 9
  const glanceDistanceY = (y - 50) / 16
  const glanceX = 50 + glanceDistanceX
  const glanceY = 50 + glanceDistanceY

  pupilData.cx = glanceX;
  pupilData.cy = glanceY;

  const strainX = (x - 50) / 18;
  const strainY = (y - 50) / 18;
  lidLeftData.cy = 50 + strainX;
  lidRightData.cy = 50 - strainX;
  lidLeftData.cx = 50 - strainY;
  lidRightData.cx = 50 + strainY;
  this.setState({
    pupilData,
    lidRightData,
    lidLeftData })
};




export default { stepTowards, journeyTowards, track };
