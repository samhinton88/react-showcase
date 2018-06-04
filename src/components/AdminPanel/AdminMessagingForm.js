import React, { Component } from 'react';

import AdminMessageBubble from './AdminMessageBubble';

class AdminMessagingForm extends Component {
  state = {
    messageValue: 'Look out for this new feature!',
    messageColour: 'rgba( 10, 120, 160, 0.8)',
    messageTextColour: 'white',
    altMessageTextColour: '',
    altMessageColour: '',
    recipientQueries: [],
    queryInput: ''
  }

  handleChange = (e) => {
    this.setState({ messageValue: e.target.value})
  }

  handleColourChange = (e) => {
    this.setState({altMessageColour: e.target.value })
  }

  handleQuerySubmit = (e) => {
    const { recipientQueries, queryInput } = this.state;
    recipientQueries.push(queryInput);
    e.preventDefault();
    this.setState({ recipientQueries: recipientQueries, queryInput: '' });

  }

  handleQueryInput = (e) => {
    this.setState({ queryInput: e.target.value});
  }

  renderQueries = () => {
    const { recipientQueries } = this.state;

    const queries = recipientQueries.map((rq, i) => {
      return <li key={i}>{rq}</li>
    })

    return <ul>{queries}</ul>
  }

  handleColourSubmit = (e) => {

    e.preventDefault();
    this.setState(
      {
        messageColour: this.state.altMessageColour,
        messageTextColour: this.state.altMessageTextColour
      })
  }

  renderPreview = () => {

    return (
      <AdminMessageBubble
        colour={this.state.messageColour}
        content={this.state.messageValue}

      />
      )
  }

  render() {

    return (
      <div >
        <div className='admin-messaging-form'>
          <textarea id="admin-messaging-text-area" onChange={this.handleChange}>

          </textarea>
          <form onSubmit={this.handleColourSubmit}>
            <label>Base Colour: </label>
            <input
              name='baseColor'
              onChange={this.handleColourChange}

              />

          </form>
        </div>
        <div>
          <div className="messaging-lower-section">
            <div className='preview-section'>
            <h3>Preview</h3>

              {this.renderPreview()}
            </div>
            <div className='recipient-section'>
              <h3>Recipient</h3>
              <form
                className='recipient-query-form'
                onSubmit={this.handleQuerySubmit}
                >
                <label>recipient query</label>
                <input onChange={this.handleQueryInput}></input>
                <p>Message will be added to resource where: {this.state.recipientQuery}</p>
                {this.renderQueries()}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminMessagingForm;
