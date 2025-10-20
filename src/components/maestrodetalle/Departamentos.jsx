import React, { Component } from 'react'
import Empleados from './Empleados'
import Global from '../../Global';
import axios from 'axios';

export class Departamentos extends Component {
  urlDepartamentos = Global.urlDepartamentos;
  selectDepartamento = React.createRef();
  state = {
    departamentos: [],
    idDepartamento : 0
  }  

  loadDepartamentos = () => {
    let request = "/webresources/departamentos";
    axios.get(this.urlDepartamentos + request).then(response => {
      console.log("leyendo")
      console.log(response.data)
      this.setState({
        departamentos: response.data
      })
    })
  }

  componentDidMount = () => {
    this.loadDepartamentos()
  }

  buscarEmpleados = (event) => {
    event.preventDefault();
    let idDepartamento = this.selectDepartamento.current.value;
    this.setState({
      idDepartamento: idDepartamento
    })
  }

  render() {
      return (
        <div>
          <h1 style={{color:"red"}}>Departamentos component</h1>
          <form onSubmit={this.buscarEmpleados}>
            <select ref={this.selectDepartamento}>
              {
                this.state.departamentos.map((departamento, index) => {
                  return(<option key={departamento.numero} value={departamento.numero}>{departamento.nombre}</option>)
                })
              }
            </select>
            <button>
              Buscar empleados
            </button>
          </form>
          {
            this.state.idDepartamento != 0 &&
            <Empleados idDepartamento = {this.state.idDepartamento}/>
          }
        </div>
      )
    }
}

export default Departamentos