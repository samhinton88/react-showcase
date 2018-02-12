import React, { Component } from 'react';
import { connect } from 'react-redux';

import Word from '../Word';

class StoryTeller extends Component {

  renderStory() {
    const skillSeq = this.props.narrative.userNarrative.map((narrObj, i) => {
      return (
        {content: narrObj.skillName, order: i}
      )
    })

    const story = skillSeq.map((skill, i) => {
      let content;

      if (i === 0) {
        content = 'First you went to ' + skill.content
      } else {
        content = ', then you went to ' + skill.content
      }

      return (
        <Word
          content={content}
          key={i}
          postion={skill.postion}
          new={i === skillSeq.length - 1 ? true : false}
        />
      )
    })

    return story
  }

  render() {
    return (
      <div>
        <div className='story-teller' style={{display: 'flex', flexDirection: 'row', marginTop: '15px'}}>

          {this.renderStory()}
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { narrative: state.userNarrative }
}

export default connect(mapStateToProps)(StoryTeller);
