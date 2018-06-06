import React, { Component } from 'react';
import SVGCircleGroup from '../SVGCircleGroup';
import style from './style.css';
import MongoExpressResourceSummary from '../MongoExpressResourceSummary';
import MongoExpressResourceHeadMenu from '../MongoExpressResourceHeadMenu';
import ObjectModeler from '../ObjectModeler';

class MongoExpressCanvasResource extends Component {
  state = {
    isNaming: false,
    newName: '',
    name: '',
    properties: [],
    summaryVisible: false,
    hoveringAt: null,
    dragging: false,
    menuVisible: false,
    writingName: false,
    modelerVisible: true
  }

  renderNameContainer = () => {
    const { isNaming } = this.state;
    const { onNameChangeSubmit, name } = this.props;

    if (isNaming) {
      return (
        <form onSubmit={this.handleNameSubmit}>
          <input
            type='text'
            className='change-name-input'
            onChange={(e) => {this.setState({newName: e.target.value})}}
          />
        </form>
      )
    } else {
      return <h3 onClick={() => this.toggleIsNaming()}>{name||'add name' }{<span className="blinking-cursor">|</span>}</h3>
    }
  }

  handleNameSubmit = (e) => {
    e.preventDefault()
    this.setState({name: this.state.newName});
    this.toggleIsNaming();
  }

  toggleIsNaming = () => {
    const {isNaming} = this.state;

    this.setState({isNaming: !isNaming});
  }

  handleClick = () => {
    const { summaryVisible, menuVisible } = this.state;
    const { reorder, resourceIndex } = this.props;

    reorder(resourceIndex);

    this.setState({ menuVisible: !menuVisible})
  }

  // handle dragging logic
  handleDrag = (e) => {
    const { clientX, clientY } = e;
    this.setState({ hoveringAt: {clientX, clientY}})
  }

  handleDragStart = (e) => {
    const { clientX, clientY } = e;

    this.setState({dragging: true})
  }

  // triggered when dropped over another div
  handleDrop= (e) => {

  }

  handleDragEnd = (e) => {

    const { hoveringAt } = this.state
    const { resourceIndex } = this.props;

    this.props.reposition(resourceIndex, hoveringAt)
    this.setState({dragging: false})
  }

  handleDragOver = (event) => {
    event.preventDefault();
  }

  renderStyle = () => {
    const { dragging } = this.state;

    return dragging ? { opacity: '0.5'} : {}
  }


  render() {

    const { circleData: {colour, size, canvasPos}, name, resourceIndex: resourceindex, properties } = this.props;
    const { summaryVisible, menuVisible, modelerVisible } = this.state;

    // convert resource props into object for modeler




    const [left, top] = canvasPos
    const style = { ...this.renderStyle(), position: 'absolute', top, left }

    return (
      <div
        className='mongo-express-canvas-resource'
        resourceindex={resourceindex}
        style={style}
        onClick={this.handleClick}
        draggable
        onDrop={this.handleDrop}
        onDrag={this.handleDrag}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        onDragOver={this.handleDragOver}
      >
        <div className='resource-head'>
          <div>
            <SVGCircleGroup colour={colour} size={size} canvasPos={canvasPos}/>
            <div className='resource-name-container'>
              {this.renderNameContainer()}
            </div>
          </div>
          <div className='resource-head-menu-container'>
            <div>
              {menuVisible
                ? <MongoExpressResourceHeadMenu />
                : ''}
            </div>
          </div>
        </div>
        <div>
          {summaryVisible ? <MongoExpressResourceSummary data={{propertiesData: properties}}/> : ''}
          {modelerVisible ? <ObjectModeler object={properties} objectName={name}/> : ''}
        </div>
          <p>{resourceindex}</p>

      </div>
    )
  }
}


export default MongoExpressCanvasResource;
