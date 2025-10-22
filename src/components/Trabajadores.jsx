import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export class Trabajadores extends Component {
    url = Global.urlTrabajadores
    state = {
        mensaje: "",
        trabajadores: []
    }
    
    loadTrabajadores = () => {
        let idsHospitales = this.props.idshospitales;
        let data = ""
        for (var id of idsHospitales){
            data += "idhospital="+id+"&";
        }
        data = data.substring(0, data.length - 1);
        this.setState({
            mensaje:data
        })
        let request = "api/trabajadores/TrabajadoresHospitales?"+data;
        axios.get(this.url + request).then(res=>{
            console.log(res.data)
            this.setState({
                trabajadores: res.data
            })
        })
    }

  
    componentDidMount = () =>{
        this.loadTrabajadores();
    }

    componentDidUpdate = (oldprops) =>{
        if(oldprops.idshospitales != this.props.idshospitales){
            this.loadTrabajadores();
        }
    }


    render() {
        return (
        <div>
            <h1 style={{color:"blue"}}>Trabajadores</h1>
            <h2 style={{color:"red"}}>{this.state.mensaje}</h2>
            
            <table className='table table-primary'>
                <thead>
                    <tr>
                        <th>Apellidos</th>
                        <th>Oficio</th>
                        <th>Salario</th>
                        <th>ID hospital</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.trabajadores.map((trabajador,index) =>{
                            return (<tr>
                                <td>{trabajador.apellido}</td>
                                <td>{trabajador.oficio}</td>
                                <td>{trabajador.salario}</td>
                                <td>{trabajador.idHospital}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
        )
    }
}

export default Trabajadores