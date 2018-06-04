import React, { Component } from 'react';

class ResourceListItem extends Component {

  render() {
    const { name, city, address, id } = this.props.dataObject;




    return(
      <tr className='resource-list-item'>
        <td>
          <div>{name}</div>
        </td>
        <td>
          <div>
            {city}

          </div>
        </td>
        <td>
          <div>
            {id}
          </div>
        </td>
        <td className='resource-control'>
          <div>
            <button className='btn-crud btn-read'>read</button>
            <button className='btn-crud btn-update'>update</button>

          </div>
          <div>
            <button className='btn-crud btn-destroy'>destroy</button>
          </div>
        </td>
      </tr>
      )
  }
}

export default ResourceListItem;
