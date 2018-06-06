import React, { Component } from 'react';
import style from './style.css'

class ObjectModeler extends Component {
  // take an object and model it graphically
  // breadcrumb and endpoints
  state = {
    lookUp: []
  }

  renderModel = (object, objectName) => {
    const { lookUp } = this.state;

    const valueAtLookup = this.lookUpTrail(lookUp, object);
    const key = lookUp[lookUp.length - 1];

    let viewerComponent;
    // viewer section
    if (valueAtLookup.type === undefined) {
      // is nested object
      const nestedKeys = Object.keys(valueAtLookup);

      viewerComponent = (
        <div>
          {/**/}
          <div>
          Viewing: {lookUp.length === 0 ? 'root schema': key} type: Nested Object
          </div>
          <div className='nested-prop-container'>
          <h6>Props</h6>
          <ul >
            {nestedKeys.map((k, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    this.setState({lookUp: [...lookUp, k]})
                  }}
                >
                  <div className='nested-prop-item'>
                    <div className='nested-prop-item name'>
                    {k}
                    </div>
                    <div className='nested-prop-item detail'>
                      {valueAtLookup[k].type ? JSON.stringify(valueAtLookup[k]):`{ ${Object.keys(valueAtLookup[k])} }`}
                    </div>
                  </div>
                </li>)
            })}
          </ul>
          </div>
        </div>
      )
    } else {
      // is endpoint, offer edit / add config
      const { type, required } = valueAtLookup;
      viewerComponent = (
        <div className='prop-endpoint'>
          <div className='prop-item-name'>
            <h3>Prop: {key}</h3>
          </div>
          <div className='prop-item-type'>
            <h4>Type: {type}</h4>
          </div>
          <div className='prop-item-config'>
            required:{required ? required : 'false'} EDIT

          </div>


        </div>

      )
    }

    return (
      <div>

        <div className='breadcrumb-nav'>
          {/*breadcrumb section*/}
          <div
            className='breadcrumb-nav-item breadcrumb-root'
            onClick={() => this.setState({lookUp: []})}
          >
            {objectName}
          </div>
          {lookUp.map((key, i) => {
            return (
              <div
                onClick={() => this.setState({lookUp: lookUp.slice(0, i)})}
                className='breadcrumb-nav-item'
              >
                {key}
              </div>
            )
          })}
        </div>

        <div className='object-viewer'>
          {/* viewer section */}
          {viewerComponent}
        </div>
      </div>
    )
  }

  // given a breadcrumb trail, return endpoint
  lookUpTrail = (trail, object) => {

    for (let i = 0; i<trail.length; i++) {
      object = object[trail[i]]
    }

    return object;
  }

  render() {
    const { object = dummyModel, objectName = 'user' } = this.props;



    return (
      <div>
        {this.renderModel(object, objectName)}
      </div>
    )
  }
}

export default ObjectModeler;

const dummyModel = {
  local: {
    password: {type: 'String', required: true},
    email: {type: 'String', required: true}
  },
  profile: {
    firstName: {type: 'String', required: true},
    lastName: {type: 'String', required: true},
    gameStats: {
      played: {type: 'Number'}
    }
  }
}
