import React, { Component } from 'react';

class Avatar extends Component {

  render() {
    const { user } = this.props;
    return (
      <div>
        <img className="avatar-large" src={user} />
      </div>
    )
  }
}

export default Avatar;
