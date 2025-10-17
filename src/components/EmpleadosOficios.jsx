import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
export class EmpleadosOficios extends Component {
    urlEmpleados = Global.urlEmpleados
    selectOficio = React.createRef()

    state = {
        oficios: [],
        empleados: []
    }

    componentDidMount(){
        this.loadOficios()
    }

    loadOficios(){
        let request = "/api/Empleados"
        axios.get(this.urlEmpleados+request).then(response => {
            console.log(response)
            for(var emp of response.data){
                if(this.state.oficios.indexOf(emp.oficio) < 0){
                    this.state.oficios.push(emp.oficio)
                }
            }
            this.setState({
                oficios: this.state.oficios
            })
        })
    }

    buscarEmpleados = (event) => {
        event.preventDefault()
        let oficio = this.selectOficio.current.value;
        let request = "api/Empleados/EmpleadosOficio/"+oficio
        axios.get(this.urlEmpleados+request).then(response => {
            console.log(response)
            this.setState({
                empleados: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Oficios</h1>
                <label>Seleccione oficio</label>
                <select ref={this.selectOficio} onChange={this.buscarEmpleados}>
                    {
                        this.state.oficios.map((oficio, index) =>{
                            return(<option key={index} value={oficio}>{oficio}</option>)
                        })
                    }
                </select>

                <table border={1}>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Departamento</th>
                            <th>ID</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empleados.map((emp,index) => {
                                return (
                                    <tr key={emp.idEmpleado}>
                                        <td>{emp.apellido}</td>
                                        <td>{emp.departamento}</td>
                                        <td>{emp.idEmpleado}</td>
                                        <td>{emp.oficio}</td>
                                        <td>{emp.salario}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmpleadosOficios