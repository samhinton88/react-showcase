import React, { Component } from 'react';
import style from './style.css';

class MongoExpressResourceHeadMenu extends Component {

  renderOptions = () => {
    const optionListItems = ['schema', 'CRUD', 'middleware'].map((option, i) => {
      return (
        <li className='option-list-item' key={i}>{option.toUpperCase()}</li>
      )
    })
    return optionListItems;
  }

  render() {

    return (
      <div className='resource-head-menu'>
        MongoExpressResourceHeadMenu
        <ul>
          {this.renderOptions()}
        </ul>
      </div>
    )
  }
}

export default MongoExpressResourceHeadMenu;
