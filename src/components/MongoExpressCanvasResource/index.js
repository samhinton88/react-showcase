import React, { Component } from 'react';
import SVGCircleGroup from '../SVGCircleGroup';
import style from './style.css';

class MongoExpressCanvasResource extends Component {
  state = {
    isNaming: false,
    newName: '',
    name: '',
  }

  renderNameContainer = () => {
    const { isNaming, name } = this.state;
    const {  onNameChangeSubmit } = this.props;

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
      return <h3 onClick={() => this.toggleIsNaming()}>{name||'add name' }</h3>
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

  render() {
    const { circleData: {colour, size, canvasPos}, name, resourceIndex } = this.props;

    const [left, top] = canvasPos

    return (
      <div className='mongo-express-canvas-resource' style={{position: 'absolute', top, left}}>
        <SVGCircleGroup colour={colour} size={size} canvasPos={canvasPos}/>
        <div className='resource-name-container'>
          {this.renderNameContainer()}

        </div>
          <h2>{String(resourceIndex)}</h2>
      </div>
    )
  }
}


export default MongoExpressCanvasResource;
