import React, { Component } from 'react';

class PieChart extends Component {

  state = {
    slices: [
      { percent: 0.1, color: 'Coral' },
      { percent: 0.65, color: 'rgba(200, 200, 250, 0.5)' },
      { percent: 0.2, color: 'deepPink' },
    ],
    cumPercent: 0
  }

  getCoordinatesForPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  }

  renderSlices = () => {
    const { slices } = this.state;
    let { cumPercent } = this.state;

    return slices.map((slice, i) => {
      const [startX, startY] = this.getCoordinatesForPercent(cumPercent);

      cumPercent += slice.percent;

      const [endX, endY] = this.getCoordinatesForPercent(cumPercent);

      const largeArcFlag = slice.percent > 0.5 ? 1 : 0;

      const pathData = [
        `M ${startX} ${startY}`,
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        `L 0 0`
      ].join(' ');

      return <path key={i} d={pathData} fill={slice.color}/>
    })
  }

  render() {

    return (
      <svg
        viewBox="-1 -1 2 2"
        style={
          {transform: "rotate(-90deg)", height: '80px', marginTop: '20px'}
        }>
        {this.renderSlices()}

      </svg>
    )
  }
}

export default PieChart;
