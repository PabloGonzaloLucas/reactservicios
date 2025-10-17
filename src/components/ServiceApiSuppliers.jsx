import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';

export default class ServiceApiSuppliers extends Component {
    state = {
        customers : [],
        customerFiltrado: {}
    }
    request = "/Suppliers"
    url = Global.urlNorthwind
    cajatexto = React.createRef();
    
    componentDidMount = () => {
        axios.get(this.url+this.request).then(response => {
            console.log(response.data.value)
            this.setState({
                customers: response.data.value
            })
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.customerFiltrado != this.state.customerFiltrado){
            console.log("Estado acctualizado: ", this.state.customerFiltrado)
        }
    }

    buscarID = (event) => {
        event.preventDefault()
        let id = this.cajatexto.current.value
        console.log(id)
        /*
        REALIZAMOS LA ÈTICION DE NUEVO
        axios.get(this.url).then(response => {
            for(var supplier of response.data.value){
                if(supplier.SupplierID == id){
                    this.setState({
                        supplier: supplier
                    })
                    break;
                }
            }
        })

        */

        this.state.customers.map((customer, index) => {
            if(id == customer.SupplierID){
                this.setState({
                    customerFiltrado: customer
                })
                console.log(customer)
                console.log(this.state.customerFiltrado)
            }
        })
    }

    render() {
        return (
        <div>
            <h1>Servicio Suppliers</h1>
            
            <ul>
                {
                    this.state.customers.map((customer, index) => {
                        return(<li key={customer.SupplierID}>
                            ID: {customer.SupplierID}, 
                            ContactName: {customer.ContactName}
                            </li>)
                    })
                }
            </ul>

            <label>Introduzca ID</label>
            <form onSubmit={this.buscarID}>
                <input type='text' ref={this.cajatexto} />
                <button>Buscar</button>
                {
                    this.state.customerFiltrado && 
                    <>
                        <h1>{this.state.customerFiltrado.SupplierID}</h1>
                        <h1>{this.state.customerFiltrado.ContactName}</h1>
                        <h1>{this.state.customerFiltrado.City}</h1>
                        <h1>{this.state.customerFiltrado.Address}</h1>
                        <h1>{this.state.customerFiltrado.Country}</h1>
                    </>
                }
            </form>
        </div>
        )
    }
}
