import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';
export default class ServicioApiCustomers extends Component {
    state = {
        customers : []
    }
    request = "/Customers";
    url = Global.urlNorthwind;
    //Creamos un metodo para cargar los clientes
    loadCustomers = () => {
        console.log("antes del servicio");
        axios.get(this.url+this.request).then(response => {
            console.log("Leyendo servicio")
           
            this.setState({
                customers: response.data.value
            })
            console.log(response.data.value)
        })
        console.log("Después del servicio");
    }

    componentDidMount = () => {
        console.log("Creando component");
        this.loadCustomers();
    }
    render() {
        return (
            <div>
                <h1>ServicioApiCustomers</h1>
                <button>
                    Load Customers
                </button>
                {
                    this.state.customers.map((cliente, index) =>{
                        return (
                            <>
                                <h3 style={{color:"blue"}}>{cliente.ContactName}</h3>
                                <h4 style={{color:"red"}}>{cliente.CompanyName}</h4><br/>
                            </>
                        )
                    })
                }
            </div>
        )
    }
}
