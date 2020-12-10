import React, {Component} from 'react'
import Logo from "./logo";


class Header extends Component {
    render() {
        return (
            <header>
                <Logo/>
                <h1>Hello World</h1>
            </header>
        )
    }
}

export default Header
