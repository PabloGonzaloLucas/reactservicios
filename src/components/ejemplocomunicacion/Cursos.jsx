import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import Alumnos from './Alumnos'

export class Cursos extends Component {
    state = {
        cursos : [],
        cursoSeleccionado : null,
        alumnoSeleccionado: null
    }
    url = Global.urlAlumnos
    selectAlumnos = React.createRef()
    detailsAlumno = (idAlumno) => {
        let request = "api/Alumnos/FindAlumno/"+idAlumno
        axios.get(this.url +request).then(response => {
            this.setState({
                alumnoSeleccionado: response.data
            })              
        })
    }

    loadCursos = () => {
        let request = "api/Alumnos/Cursos"
        axios.get(this.url+request).then(response => {
            console.log(response)
            this.setState({
                cursos : response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadCursos()
    }

    loadAlumnos = () => {
        let curso = this.selectAlumnos.current.value
        this.setState({
            cursoSeleccionado : curso
        })
        console.log(this.state.cursoSeleccionado)
    }

    render() {
        return (
        <div>
            <h1>Practica Alumnos</h1>
            <form>
                <select ref={this.selectAlumnos} onChange={this.loadAlumnos}>
                    {
                        this.state.cursos.map((curso, index) => {
                            return(<option key={index} value={curso}>{curso}</option>)
                        })
                    }
                </select>
            </form>
            {
                this.state.alumnoSeleccionado != null && 
                <div style={{ marginTop: "20px", border: "1px solid gray", padding: "10px" }}>
                    <h3>Detalles del Alumno</h3>
                    <p><strong>Nombre:</strong> {this.state.alumnoSeleccionado.nombre}</p>
                    <p><strong>Apellidos:</strong> {this.state.alumnoSeleccionado.apellidos}</p>
                    <p><strong>ID:</strong> {this.state.alumnoSeleccionado.idAlumno}</p>
                    <img src={this.state.alumnoSeleccionado.imagen} alt={this.state.alumnoSeleccionado.nombre} />
                </div>
            }

            {
                this.state.cursoSeleccionado != null &&
                <Alumnos idCurso={this.state.cursoSeleccionado} detailsAlumno={this.detailsAlumno}/>
            }

        </div>
        )
    }
}

export default Cursos