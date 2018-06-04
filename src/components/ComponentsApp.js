import React, { Component } from 'react';

import Dashboard from './Dashboard'
import ReactEye from './ReactEye'
import ParakeatLogo from './ParakeatLogo'
import FoodIcon from './FoodIcon'

import Card from './Card';
import Avatar from './Avatar';
import Banner from './Banner';
import SignIn from './SignIn';



class ComponentsApp extends Component {
  state = {
    reactLogoRect: null,
    windowDimensions: { width: 0, height: 0},

  }


  componentDidMount() {
    this.setState({ reactLogoRect: this.inputElement.getBoundingClientRect() })
      window.addEventListener('resize', () => {


      this.setState({
        windowDimensions: { width: window.innerWidth, height: window.innerHeight },
        reactLogoRect: this.inputElement.getBoundingClientRect()
        })
      })
    }




  render() {
    const content = {copy: 'Dine off the eaten track', brand: 'Parakeat'}

    const grad = `repeating-linear-gradient(45deg, transparent, transparent 5px,
        rgba(143, 77, 63, 0.25) 5px, rgba(143, 77, 63, 0.25) 10px),
        radial-gradient(circle at 50% 0,
        rgba(255,0,0,.5),
        rgba(255,0,0,0) 70.71%),
      radial-gradient(circle at 6.7% 75%,
        rgba(0,0,255,.5),
        rgba(0,0,255,0) 70.71%),
      radial-gradient(circle at 93.3% 75%,
        rgba(0,255,0,.5),
        rgba(0,255,0,0) 70.71%) beige`

    const gradFreshTurboscent = 'linear-gradient(#f1f2b5, #135058)'
    return (
      <div className="full-width">

        <h2 style={{color: 'black'}}>Components</h2>
        <h3>Banner</h3>
        <Banner background={grad} content={content}>
          <ParakeatLogo color='white'/>
          <SignIn />

        </Banner>
        <div style={{color: 'white', marginTop: '30px'}}>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <FoodIcon />

        </div>
        <h3 style={{marginTop: '60px'}}>Colour Menu</h3>
          <Dashboard />
        </div>
        <h3>ReactEye</h3>


            <ReactEye
              inputRef={el => this.inputElement = el}
              loc={this.state.reactLogoRect}
              stroke='black'
              wandering
           />

        <h3>Card</h3>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Card avatar='../../assets/veg.jpeg' detail='This is the detail' title='test card' background={gradFreshTurboscent}/>
          <Card avatar='../../assets/veg.jpeg' detail='This is the detail' title='test card' background={gradFreshTurboscent}/>
        </div>
        <h3>avatar</h3>
        <Avatar user='../../assets/sam.jpg'/>

      </div>
    )
  }
}
export default ComponentsApp
