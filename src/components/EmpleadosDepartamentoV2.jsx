import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class EmpleadosDepartamentoV2 extends Component{
    urlEmpleados = Global.urlEmpleados;
    urlDepartamentos = Global.urlDepartamentos;
    selectDepartamento = React.createRef();
    
    buscarEmpleados = (event) => {
        event.preventDefault();
        let idDepartamento = this.selectDepartamento.current.value;
        let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento;
        axios.get(this.urlEmpleados+request).then(response => {
            console.log("Leyendo empleados")
            console.log(this.url+request)
            this.setState({
                empleados: response.data
            })
            console.log(response)
        })
        
    }
    
    componentDidMount(){
        this.loadDepartamentos()
    }

    loadDepartamentos = () => {
        let request = "webresources/departamentos"
        axios.get(this.urlDepartamentos+request).then(response => {
            console.log(response)
            this.setState({departamentos: response.data})
            console.log(this.state.departamentos)
        })
    }
    
    state = {
        empleados: [],
        departamentos: []
    }



    render(){
        return(
            <div>
                <h1 style={{color:"blue"}}>
                    Api Empleados Departamento
                </h1>
                <form>
                    <label>Introduzca ID Departamento</label>
                    <select onChange={this.buscarEmpleados} ref={this.selectDepartamento}>
                        {
                           this.state.departamentos.map((dept, index) => {
                               return(<option key={index} value={dept.numero}>{dept.nombre}</option>)
                           })
                        }
                    </select>
                   
                </form>
                <ul>
                    {
                        this.state.empleados.map((emp, index) => {
                            return(<li key={index}>{emp.apellido}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}