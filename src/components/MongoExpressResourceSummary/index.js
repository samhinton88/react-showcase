import React, { Component } from 'react';

class MongoExpressResourceSummary extends Component {

  renderData = () => {
    const { data: {propertiesData} } = this.props;
    if (!propertiesData) {return }
    const properties = propertiesData.map((property, i) => {
      const { name, type, required } = property;

      const background = required ? 'linear-gradient(30deg, rgba(20, 200, 20, 0.8) 10%, rgba(20, 200, 10, 0.8), transparent 95%)' : 'white';
      const color = required ? 'white' : 'black'
      return (
        <li  key={i}>
          <div style={{backgroundColor:'transparent', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '3px'}}>
            <div style={{backgroundColor: 'white'}}>
              <p style={{margin:0}}>{name}:</p>
            </div>
            <div>
              <div style={{background, color, padding: '1px', width: '50px', borderRadius: '5px', boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)', marginLeft: '3px'}}>
                <p style={{margin:0}}>{type}</p>
              </div>
            </div>
            <div>
              <button style={{textAlign: 'center', borderRadius: '50%', height: '24px', width: '24px', marginLeft: '5px'}}>v</button>
              <button style={{textAlign: 'center', borderRadius: '50%', height: '24px', width: '24px', marginLeft: '5px'}}>v</button>
              <button style={{textAlign: 'center', borderRadius: '50%', height: '24px', width: '24px', marginLeft: '5px'}}>v</button>
            </div>
          </div>
        </li>
      )
    });
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h6>Properties</h6>
        <ul>{properties}</ul>
      </div>
      )

  }

  render() {
    console.log(this.props)
    const { data } = this.props;

    return(
      <div className='mongo-express-resource-summary'>
        {this.renderData()}
      </div>
    )
  }
}

export default MongoExpressResourceSummary;
