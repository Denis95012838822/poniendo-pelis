
import { useState } from "react"
import '../Styles/stylesCardCompras.css'

export const CardCompras = ({ imagen, descripcion, precio, titulo }) => {

    const [agregado, setAgregado] = useState(false)
    
    const clikQuitar = () => {
           setAgregado(true)
    }
    const clickAgregar = () =>{
    
        setAgregado(false)
    }
    return (
    
            <div className="targeta">
                <img src={imagen} alt={titulo} className="targeta_imagen" />
                <div className="targeta_parrafo">
                    <h3 className="targeta_titulo">{titulo}</h3>
                    <p className="tageta_parrafo">{descripcion}</p>
                    <p className="targeta_precio"> <samp className="negrita">Precio:</samp> {precio} USD</p>
                    {agregado ? <button
                className="boton"
                type="button"
                onClick={clickAgregar}
            > Quitar del carrito</button>
                : <button
                    className="boton"
                    type="button"
                    onClick={clikQuitar}
                >Agregar al carrito</button>}
       
                </div>

            </div>
            
    )
}
