import React, { Component } from 'react';
import SVGCircleGroup from '../SVGCircleGroup';
import MongoExpressCanvasMenu from '../MongoExpressCanvasMenu';
import MongoExpressCanvasResource from '../MongoExpressCanvasResource';
import inlineStyles from './inline_styles';
import style from './style.css';
import {createResource}  from './create_resource';
import dummyResources from './dummy_resource';
console.log(dummyResources)

class MongoExpressCanvas extends Component {
  state = {
    dragging: false,
    resourceIndex: 0,
    menu: null,
    messages: [
      {content: 'right-click this canvas to create a new resource', canvasPos: [700, 400] }
    ],
    resources:
      dummyResources
    ,
    colorArray: [
      {r: 20, g: 200, b: 20}, {r: 20, g: 20, b: 200}, {r: 200, g: 20, b: 20}, {r: 2, g: 200, b: 20}
    ]
  }

  createResource = createResource;

  renderResources = () => {
    const { resources } = this.state;

    return resources.map((resource, i) => {
      const { name, resourceIndex, properties } = resource;

      return (
        <MongoExpressCanvasResource
          key={i}
          circleData={resource}
          name={name}
          onNameChangeSubmit={this.handleNameChangeSubmit}
          reorder={this.reorder}
          resourceIndex={resourceIndex}
          reposition={this.reposition}
          properties={properties}
        />
      )
    })
  }

  reorder = (resourceIndex) => {
    // ensure stacking context of resources puts active component at the top
    const { resources } = this.state;

    const candidate = resources.find((resource) => {
      return resource.resourceIndex === resourceIndex
    });

    const index = resources.indexOf(candidate);

    const newResources = [
      ...resources.slice(0, index),
      ...resources.slice(index + 1)
    ];

    this.setState({resources: [...newResources, candidate]})
  }

  reposition = (resourceIndex, newPosition) => {
    const { resources } = this.state;
    const { clientX, clientY} = newPosition;

    const candidate = resources.find((resource) => {
      return resource.resourceIndex === resourceIndex
    })

    const index = resources.indexOf(candidate);

    const updatedResource = { ...candidate,  canvasPos: [clientX, clientY]  };

    const newResources = [
      ...resources.slice(0, index),
      ...resources.slice(index + 1)
    ];



    this.setState({
      resources: [...newResources, updatedResource ]
    })
  }

  renderMenu = () => {
    const { menu } = this.state;

    if (!menu) { return }
    const {top, left} = menu;
    return (
      <MongoExpressCanvasMenu
        top={top}
        left={left}
        options={[{label: 'new', cb: this.createResource.bind(this) }]}
      />
    )
  }

  renderMessages = () => {
    const { messages } = this.state;
    return messages.map((message, i) => {
      const { content, canvasPos: [left, top] } = message;

      return (
        <div
          key={`message${i}`}
          className='canvas-message-container'
          style={
            {
              position: 'absolute',
              top,
              left,
              background: 'rgba(30, 30, 30, 0.8)',
              // border: '1px solid rgba(50, 50, 50, 0.8)',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
              color: 'white',
              textAlign: 'center',
              borderRadius: '7px'}
          }
        >
          {content}
        </div>
      )
    })
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
    console.log(this)

    return (
      <div
        onClick={this.handleClick}
        onContextMenu={this.handleContextMenu}
        className='mongo-express-canvas'
        style={inlineStyles}

        onDragOver={(e) => e.preventDefault()}
      >
        {this.renderResources()}
        {this.renderMenu()}
        {this.renderMessages()}

      </div>
    )
  }
}

export default MongoExpressCanvas;
