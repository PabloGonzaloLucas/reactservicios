import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServicioApiCustomers from './components/ServicioApiCustomers';
import ServiceApiSuppliers from './components/ServiceApiSuppliers';
import EmpleadosDepartamento from './components/EmpleadosDepartamento';
import EmpleadosDepartamentoV2 from './components/EmpleadosDepartamentoV2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <EmpleadosDepartamentoV2 />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
