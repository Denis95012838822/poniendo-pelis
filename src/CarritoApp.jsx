import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./Componente/NavBar"
import { CarritoPage } from "./pages/CarritoPage"
import { ComprasPage } from "./pages/ComprasPage"
import { ProductosProvider } from "./Context/ProductosProvider"
import { CarritoProvider } from "./Context/CarritoProvider"



export const CarritoApp = () => {
    return (
        <ProductosProvider>
            
                <NavBar></NavBar>

                <div className="container">
                    <Routes>
                        <Route path="/carrito" element={<CarritoPage></CarritoPage>} ></Route>
                        <Route path="/compras" element={<ComprasPage></ComprasPage>} ></Route>
                        <Route path="/*" element={<Navigate to='/carrito'></Navigate>}></Route>
                    </Routes>
                </div>

        
        </ProductosProvider>

    )
}
