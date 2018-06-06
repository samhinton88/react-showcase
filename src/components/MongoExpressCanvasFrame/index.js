import React, { Component } from 'react';
import style from './style.css';

class MongoExpressCanvasFrame extends Component {
  state = {

  }

  renderTabs = () => {
    const { openDocs } = this.props;

    const openTabs = openDocs.map((openDoc, i) => {
      const { name, active } = openDoc;
      const style = i === 0 ? {marginLeft: '23px'} : {marginLeft: '-10px'}
      return <div
                key={name}
                className={`tab ${active ? 'active' : ''}${i === 0 ?' first-tab': ''}`}
                style={style}
              >{name}</div>
    });

    openTabs.push(
      <div style={
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginLeft: '10px',

        }
      }>
        <button
          className='btn-add-tab'
          style={
            {
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              boxShadow: '-1px -1px 1px rgba(0, 0, 0, 0.2)',
              border: '2px solid rgba(48, 205, 201, 1)'
            }
        }
          >
          +
          </button>
      </div>
    );
    return openTabs;
  }

  render() {
    const { openDocs, activeTab } = this.props;

    return (
      <div className='mongo-express-canvas-frame'>
        <div className='tab-nav'>
          {this.renderTabs()}
        </div>
          {activeTab}
      </div>
    )
  }
}

export default MongoExpressCanvasFrame;
