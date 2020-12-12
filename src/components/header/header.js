import React, {Component} from 'react'

import Logo from "./logo/logo";
import Navbar from "./navbar/navbar";

import './header.scss'


class Header extends Component {
  render() {
    return (
      <header className='header'>
        <Logo/>
        <Navbar/>
      </header>
    )
  }
}

export default Header
