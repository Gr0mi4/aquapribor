import React, {Component} from "react";
import { NavLink } from "react-router-dom"
import './navbar.scss'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <NavLink to='/' className='navItem'>Главная</NavLink>
        <NavLink to='/' className='navItem'>Продукция</NavLink>
        <NavLink to='/' className='navItem'>Сертификаты</NavLink>
        <NavLink to='/' className='navItem'>Контакты</NavLink>
      </nav>
    )
  }
}

export default Navbar
