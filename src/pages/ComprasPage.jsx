

import { useContext } from "react"
import { CardCompras } from "../Componente/CardCompras"
import { ProductosContext } from "../Context/ProductosContext"



export const ComprasPage = () => 
{
   const { productos } =useContext( ProductosContext )
   console.log({productos})
    return (
        <>
            <h1>Compras: </h1>
            <hr />
            {productos && 
            productos.map( (producto)  => (
                
                <CardCompras
                    key={producto.id}
                    descripcion={producto.description}
                    imagen={producto.image}
                    precio={producto.price}
                    titulo={producto.title}
                />
                
            )
            )}

        </>
    )
}
