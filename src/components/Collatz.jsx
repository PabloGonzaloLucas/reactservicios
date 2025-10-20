import React, { Component } from 'react'

export class Collatz extends Component {
    state = {
        numeros : []
    }

    componentDidMount = () => {
        let aux = []
        let num = this.props.numero
        aux.push(num) 
        while(num != 1){
            if(num % 2 == 0){
                num = num/2;
                aux.push(num)
            }
            else{
                num = (num*3) + 1
                aux.push(num) 
            }
        }

        this.setState({
            numeros : aux
        })
    }

    render() {
        return (
        <div style={{margin: "30px"}}>
            <h1>Collatz</h1>
            {
                this.state.numeros.map((num, index) =>{
                    return(<h1 >{num}</h1>)
                })    
            }
        </div>
        )
    }
}

export default Collatz