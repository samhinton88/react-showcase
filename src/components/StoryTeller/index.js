import React, { Component } from 'react';
import { connect } from 'react-redux';

class StoryTeller extends Component {

  renderStory() {
    const story = this.props.narrative.userNarrative.map((narrObj) => {
      return <div key={narrObj.id}>{narrObj.skillName}</div>
    })

    return story;
  }

  render() {
    console.log(this.props.narrative)
    return (
      <div className='story-teller'>
        {this.renderStory()}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { narrative: state.userNarrative }
}

export default connect(mapStateToProps)(StoryTeller);
