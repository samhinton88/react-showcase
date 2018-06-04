import React, { Component } from 'react';
import style from './style.css';

class MongoExpressCanvasMenu extends Component {
  state = {
    options: ['new', 'save', 'print']
  }


  renderOptions = () => {
    const { options, top, left } = this.props

    return options.map((op, i) => {
      const {label, cb} = op;

      return <li key={i} onClick={cb} className='menu-list-item'>{label}</li>
    })
  }

  render() {
    const {top, left} = this.props;

    return (
      <div className='mongo-express-canvas-menu' style={{ position: 'absolute', top, left }}>
        <div className='menu-list-container'>
          <ul className='menu-list'>
            {this.renderOptions()}
          </ul>
        </div>
      </div>
    )
  }
}

export default MongoExpressCanvasMenu;
