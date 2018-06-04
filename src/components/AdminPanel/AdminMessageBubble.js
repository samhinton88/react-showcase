import React, { Component } from 'react';
import ParakeatLogo from '../ParakeatLogo';

class AdminMessageBubble extends Component {

  render() {
    const { content, colour , textColour = 'white' } = this.props;
    const colourMix = `${ colour || 'rgba( 10, 120, 160, 0.8)' } linear-gradient(120deg, rgba( 90, 120, 160, 0.7), transparent)`

    return (
      <div>
        <div className="admin-message-container">
          <ParakeatLogo small className="admin-message-avatar" color="rgba( 10, 120, 160, 0.8)"/>
          <div
            className="admin-message-bubble"
            style={{ background: colourMix, color: textColour }}
          >
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminMessageBubble;
