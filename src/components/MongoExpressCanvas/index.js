import React, { Component } from 'react';
import SVGCircleGroup from '../SVGCircleGroup';
import MongoExpressCanvasMenu from '../MongoExpressCanvasMenu';
import MongoExpressCanvasResource from '../MongoExpressCanvasResource';
import inlineStyles from './inline_styles';

class MongoExpressCanvas extends Component {
  state = {
    dragging: false,
    resourceIndex: 1,
    menu: {top: 121, left: 214},
    messages: [

    ],
    resources: [
      {resourceIndex: 0, name: 'user', size: 100, canvasPos: [50, 50], colour: {r: 10, g: 10, b: 100}}
    ]
  }

  renderResources = () => {
    const { resources } = this.state;

    return resources.map((resource, i) => {
      const { name, resourceIndex } = resource;

      return (
        <MongoExpressCanvasResource
          key={i}
          circleData={resource}
          name={name}
          onNameChangeSubmit={this.handleNameChangeSubmit}
          resourceIndex={resourceIndex}
        />
      )
    })
  }

  handleNameChangeSubmit = (e) => {
    console.log(e.target.value);
    console.log(e);
    e.preventDefault()
  }

  renderMenu = () => {
    const { menu } = this.state;

    if (!menu) { return }
    const {top, left} = menu;
    return (
      <MongoExpressCanvasMenu
        top={top}
        left={left}
        options={[{label: 'new', cb: this.createResource }]}
      />
    )
  }

  createResource = (data) => {
    const {resources, menu: {left, top}} = this.state;
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

    const _resources = [...resources, { resourceIndex, name: `resource${resourceIndex}`, size: 100, canvasPos: [candidateLeft, candidateTop], colour: {r: 10, g: 10, b: 100}}]
    this.setState({resources: _resources, resourceIndex})
  }

  handleClick = () => {
    if (this.state.menu) {
      this.setState({menu: null});
    }
  }

  handleContextMenu = (e) => {
    const { clientX, clientY } = e;
    e.preventDefault();
    console.log(clientX, clientY)
    const _menu = {top: clientY, left: clientX};
    this.setState({ menu: _menu })
  }

  render() {
    console.log(this.state.resources)

    return (
      <div
        onClick={this.handleClick}
        onContextMenu={this.handleContextMenu}
        className='mongo-express-canvas'
        style={inlineStyles}
      >
        {this.renderResources()}
        {this.renderMenu()}

      </div>
    )
  }
}

export default MongoExpressCanvas;
