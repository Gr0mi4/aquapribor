import React, {Component} from 'react'
import logo from 'icons/header-logo.png'
import './logo.scss'

class Logo extends Component {
  render() {
    return (
      <>
        <img className="logo" src={logo} alt={'main-logo'}/>
      </>
    )
  }
}

export default Logo
