import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export class Alumnos extends Component {
    url = Global.urlAlumnos
    boton = React.createRef();

    state = {
        alumnos : []
    }
    
    loadAlumnos = () => {
        let request = "api/Alumnos/FiltrarCurso/"+this.props.idCurso
        axios.get(this.url+request).then(response => {
            this.setState({
                alumnos: response.data
            })
            console.log(response.data)
        })
    }
    
    componentDidMount = () => {
        this.loadAlumnos()
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idCurso != this.props.idCurso){
            this.loadAlumnos()
        }
    }
    
    render() {
        return (
        <div>
            <h1>{this.props.idCurso}</h1>
            <ul>
                {
                    this.state.alumnos.map((alumno, index) => {
                        return(<li key={index} value={alumno.idAlumno}>{alumno.nombre} {alumno.apellidos} 
                                <button value={alumno.idAlumno} onClick={() => this.props.detailsAlumno(alumno.idAlumno) }>Detalles</button>
                              </li>)
                    })
                }
            </ul>
        </div>
        )
    }
}

export default Alumnos