import React, { Component } from 'react'

export class MenuRutas extends Component {
    render() {
        return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/tabla/21">Tabla Multiplicar</a></li>
                <li><a href="/collatz/5">Collatz </a></li>
                <li><a href="/collatz/9">Collatz </a></li>
                <li><a href="/collatz/156">Collatz </a></li>
            </ul>
        </div>
        )
    }
}

export default MenuRutas