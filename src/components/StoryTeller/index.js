import React, { Component } from 'react';
import { connect } from 'react-redux';


class TypewriterChar extends Component {

  render() {
    return (
      <p style={this.props.style}>
        {this.props.content}
      </p>
    )
  }
}

class Word extends Component {

  renderChars = () => {
    const chars =  this.props.content.split('');
    const mappedChars = chars.map((char, i) => {
      let style;

      if (this.props.new) {
        style =  {
            animationName: 'fadeIn',
            animationDuration: '1s',
            animationDelay: `${i / 20}s`,
            color: 'black',
            animationFillMode: 'both'
        }
      }

      return <TypewriterChar content={char} style={style} key={i}/>
    });

    return mappedChars;
  }

  render() {
    console.log('inside word render')
    return(
      <div className='word' style={{display: 'flex', flexDirection: 'row'}}>
        {this.renderChars()}
      </div>
    )
  }

}

class StoryTeller extends Component {

  renderStory() {
    const skillSeq = this.props.narrative.userNarrative.map((narrObj, i) => {
      return (
        {content: narrObj.skillName, order: i}
      )
    })



    const story = skillSeq.map((skill, i) => {

      const content = 'then you went to ' + skill.content

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
      <div className='story-teller' style={{display: 'flex', flexDirection: 'row'}}>
        {this.renderStory()}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { narrative: state.userNarrative }
}

export default connect(mapStateToProps)(StoryTeller);
