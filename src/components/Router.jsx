import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TablaMultiplicar from './TablaMultiplicar'
import NotFound from './NotFound'
import { useParams } from 'react-router-dom'
import Collatz from './Collatz'
import MenuRutas from './MenuRutas'

export class Router extends Component {
    render() {
        function TablaMultiplicarElement(){
            let {minumero} = useParams();
            //DEVOLVEMOS EL COMPONENTE TABLA MULTIPLICAR CON SUS PROPS
            return <TablaMultiplicar numero={minumero}/>
        }

        function CollatzElement(){
            let {numero} = useParams();

            return <Collatz numero={numero} />;
        }

        return (
            <BrowserRouter>
            <MenuRutas />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tabla/:minumero" element={<TablaMultiplicarElement />} />
                    <Route path="/collatz/:numero" element={<CollatzElement />} />
                    {/* PARA INCLUIR LAS RUTAS QUE NO EXISTEN EN UNA PAGINA 404
                    PERSONALIZADA DEBEMOS UTILIZAR EL ASTERISCO Y SIEMPRE DEBE 
                    SER LA ULTIMA RUTA */}
                    <Route path="*" element={<NotFound/>} />
                    
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router