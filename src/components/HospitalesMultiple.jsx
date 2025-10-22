import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import axios from 'axios'
import Global from '../Global'

export class HospitalesMultiple extends Component {
    url = Global.urlTrabajadores
    cajaSalario = React.createRef()
    selectHospital = React.createRef()
    state = {
        hospitales: [],
        hospitalesSeleccionados : []
    }

    loadHospitales = () => {
        let request = "api/Hospitales"
        axios.get(this.url+request).then(res => {
            console.log("cargando hospitales")
            this.setState({
                hospitales: res.data
            })
        })
    }

    componentDidMount = () => {
        this.loadHospitales()
    }

    getHospitalesSeleccionados = (event) => {
        event.preventDefault()
        let aux = [];
        let options = this.selectHospital.current.options;
        for(var option of options){
            if(option.selected == true){
                aux.push(option.value);
            }
        }
        this.setState({
            hospitalesSeleccionados : aux
        })
        
    }

    incrementarSalarios = (event) =>{
        event.preventDefault()
        let request = "api/trabajadores/UpdateSalarioTrabajadoresHospitales?"
        this.getHospitalesSeleccionados(event)
        let salarioIncrement = this.cajaSalario.current.value
        let urlPut = this.url+request+"incremento="+salarioIncrement+"&" 
        for(var id of this.state.hospitalesSeleccionados){
            urlPut += "idhospital="+id+"&"
        }
        urlPut= urlPut.substring(0, urlPut.length - 1);
        console.log(urlPut)
        axios.put(urlPut).then(res => {
            console.log("actualizado")
        })
        
    }

    

    render() {
        return (
            <div>
                <h1>Hospitales Multiple</h1>
                <form>
                    <select size={8} multiple ref={this.selectHospital}>
                        {
                            this.state.hospitales.map((hospital, index) => {
                                return(<option key={index} value={hospital.idHospital}>{hospital.nombre}</option>)
                            })
                        }
                    </select>
                    <input type="text" ref={this.cajaSalario}/>
                    <button className='btn btn-primary' onClick={this.incrementarSalarios}>Incrementar</button>
                    <button onClick={this.getHospitalesSeleccionados} className='btn btn-warning'>Mostrar trabajadores</button>
                </form>
                {
                    this.state.hospitalesSeleccionados.length > 0 && 
                    <Trabajadores idshospitales={this.state.hospitalesSeleccionados}/>
                }
            </div>
        )
    }
}

export default HospitalesMultiple