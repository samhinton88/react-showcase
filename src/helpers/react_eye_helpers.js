const stepTowards = function(destination, step = 0.01) {
  const {position} = this;
  // console.log('start position ',position);
  const xDir = position.x < destination.x ? 1 : -1;
  const yDir = position.y < destination.y ? 1 : -1;
  const xDistToDest = Math.abs(position.x - destination.x);
  // console.log('x distance to dest', xDistToDest);
  const yDistToDest = Math.abs(position.y - destination.y);
  // console.log('y distance to dest', yDistToDest);
  const xStep = xDistToDest * (xDir * step);
  const yStep = yDistToDest * (yDir * step);
  position.x += xStep;
  position.y += yStep;
  // console.log('finish position ', position);

}

const trackTowards = function(destination, step = 0.01) {
  console.log('start', this.position)
  let count = 0
  while(
    Math.ceil(this.position.x) != destination.x &&
    Math.ceil(this.position.y) != destination.y
  ) {
    this.stepTowards(destination);
    count += 1
    if (count % 5 === 0) { console.log(`step ${count}`, this.position)}
    this.track.push(this.position);

  }
  console.log(count)
  console.log(this.track[0], this.track[389])
  console.log('finish', this.position)
}

export default { stepTowards, trackTowards };
