import React, { Component } from 'react';

import MongoExpressCanvas from '../MongoExpressCanvas';
import MongoExpressCanvasFrame from '../MongoExpressCanvasFrame';
import MongoExpressEditorNavLeft from '../MongoExpressEditorNavLeft';
import ReactEye from '../ReactEye';
import style from './style.css';



class MongoExpressEditor extends Component {
  state = {
    openDocs: [{active: true, name: 'My First Canvas'}, {active: false, name: 'some_other_doc.2'}],
    navDiscrete: true
  }

  renderNavClass = () => {
    const { navDiscrete } = this.state;

    const classes = navDiscrete ? ' nav-left-small' : ' nav-left-large';

    return classes
  }

  handleMouseEnter = () => {
    this.setState({ navDiscrete: false });
  }

  handleMouseLeave = () => {
    this.setState({ navDiscrete: true })
  }

  render() {

    return (
      <div>
        <div className='nav-bar-top'>
          <div className='logo-container'>Logo</div>
          <div className='salutation'><p>Hello Sammy!</p></div>
        </div>
          <div className='mongo-express-editor'>
            <div
              className={`nav-bar-left${this.renderNavClass()}`}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <MongoExpressEditorNavLeft />
            </div>


              <MongoExpressCanvasFrame
                activeTab={<MongoExpressCanvas />}
                openDocs={this.state.openDocs}
              />

            <div className='right-panel'>
            </div>
          </div>
        </div>


    )
  }
}

export default MongoExpressEditor;
