

import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"

const inicialState = []

export const CarritoProvider = ({ children }) => {

    const [listaCompras, dispatch] = useReducer (comprasReducer, inicialState)
    

    const comprasReducer = (state = inicialState, action = {})=>{
        switch (action.type) {
            case '[CARRITO] Agregar Compra':
                return [...state,action.payload]
                case '[CARRITO] Aumentar Cantidad compra':
                
                break;
                case '[CARRITO] Disminuir Cantidad Compra':
                
                break;
                case '[CARRITO] Eliminar Compras':
                 return state.filter( compra=> compra.id !==action.payload)
        
            default:
                return state;
        }
    }
    const agregarCompras = (compras) => {
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: compras
          }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad compra',
            payload: id
           }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad Compra',
            payload: id
          }
        dispatch(action)
    }
    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar Compras',
            payload:id
         }
        dispatch(action)
    }

    
     
    return (
        <CarritoContext.Provider value={{listaCompras, agregarCompras, aumentarCantidad, disminuirCantidad, eliminarCompra,}}>
            {children}
        </CarritoContext.Provider>
    )
}
