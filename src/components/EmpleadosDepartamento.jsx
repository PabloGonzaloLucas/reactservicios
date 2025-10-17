import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class EmpleadosDepartamento extends Component{
    url = Global.urlEmpleados;
    cajaDepartamento = React.createRef();
    
    buscarEmpleados = (event) => {
        event.preventDefault();
        let idDepartamento = this.cajaDepartamento.current.value;
        let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento;
        axios.get(this.url+request).then(response => {
            console.log("Leyendo empleados")
            console.log(this.url+request)
            this.setState({
                empleados: response.data
            })
            console.log(response)
        })
        
    }
    
    state = {
        empleados: []
    }



    render(){
        return(
            <div>
                <h1 style={{color:"blue"}}>
                    Api Empleados Departamento
                </h1>
                <form>
                    <label>Introduzca ID Departamento</label>
                    <input type="number" ref={this.cajaDepartamento} />
                    <button onClick={this.buscarEmpleados}>
                        Buscar empleados
                    </button>
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