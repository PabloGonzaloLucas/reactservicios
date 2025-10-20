import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export class Empleados extends Component {
    url = Global.urlEmpleados;

    state = {
        empleados : [],
        texto: ""
    }

    loadEmpleados = () => {
        let idDepartamento = this.props.idDepartamento
        let request = "api/Empleados/EmpleadosDepartamento/" + this.props.idDepartamento;
        axios.get(this.url + request).then(response => {
            this.setState({
                empleados: response.data
            })
        })

    }

    componentDidMount = () => {
        this.loadEmpleados();
    }
    
    componentDidUpdate = (oldProps) => {
        //dibujamos las nuevas y las antugias
        console.log("current: "+this.props.idDepartamento)
        console.log("old: "+oldProps.idDepartamento)
        //solamente actualizamos state si props ha cambiado
        if(oldProps.idDepartamento != this.props.idDepartamento){
            this.loadEmpleados();
        }
    }

    render() {
        return (
        <div>
            <h1 style={{color:"blue"}}>Empleados {this.props.idDepartamento}</h1>
            <h1>{this.state.texto}</h1>
            <ul>
                {
                    this.state.empleados.map((emp, index) => {
                        return(<li key={index}>
                            {emp.apellido} - {emp.oficio} - {emp.idDepartamento}
                        </li>)
                    })
                }
            </ul>
        </div>
        )
    }
}

export default Empleados