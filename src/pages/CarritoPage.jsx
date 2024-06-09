

export const CarritoPage = () => {


  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>

        <tbody>
          
              <tr>
                <th scope="row">titulo</th>
                <td>precio </td>
                <td>Cantidad </td>
                <td> Eliminar </td>
              </tr>

        </tbody>

      </table>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" >Comprar</button>
      </div>
    </>
  )
}
