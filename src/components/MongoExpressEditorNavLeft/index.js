import React, { Component } from 'react';
import style from './style.css';

class MongoExpressEditorNavLeft extends Component {
  state = {
    isDiscrete: true
  }

  renderOptions = () => {
    return ['foo', 'bar', 'bang', 'bob'].map((option, i) => {
      return <div key={i}>{option}</div>
    })
  }



  renderClasses = () => {
    const { isDiscrete } = this.state;

    const classes = isDiscrete ? ' nav-left-small' : ' nav-left-large';

    return classes
  }

  render() {
    console.log(this.state)

    return(
      <div
        className={`mongo-express-editor-nav-left`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}

      >
        <div>

        </div>
        <div className={`nav-left option-group`}>
          {this.renderOptions()}
        </div>
      </div>
    )
  }
}

export default MongoExpressEditorNavLeft
