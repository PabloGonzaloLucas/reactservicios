import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class MenuRutas extends Component {
    render() {
        return (
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/tabla/21">Tabla Multiplicar</NavLink></li>
                <li><NavLink to="/tabla/41">Tabla Multiplicar</NavLink></li>
                <li><NavLink to="/collatz/5">Collatz </NavLink></li>
                <li><NavLink to="/collatz/9">Collatz </NavLink></li>
                <li><a href="/collatz/156">Collatz </a></li>
                
            </ul>
        </div>
        )
    }
}

export default MenuRutas