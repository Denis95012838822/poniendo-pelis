import { useState } from "react"


export const Buscador = () => {
    
    const UrlBase = 'https://api.themoviedb.org/3/search/movie'
    const Api_Key = '362c1cba95a713101258cae0c62c8284'
   
    const [buscador, setBuscador] = useState('')
    const [pelicula, setPelicula] = useState([])

    const handleInputChange = (e) => {
          setBuscador(e.target.value)
    }

    const fetchPeliculas =  async() => {
        try {
            const response = await fetch(`${UrlBase}?query=${buscador}&api_key=${Api_Key}`)
            const data= await response.json()
            setPelicula(data.results)
            console.log(pelicula)
          
        } catch (error) {
             console.log(error)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }
    return (
        <div className="container">
            <h1 className="titulo">Buscador del películas</h1>

            <form onSubmit={handleSubmit}>
                <input type="text"
                className="input" 
                id="exampleInputEmail1" 
                placeholder="escribe la película" 
                onChange={handleInputChange}
                value={buscador}
                />
                <button className="button" type="submit">Buscar</button>
            </form>

            <div className="movie_container">
                {
                    pelicula.map( (pelis) => (
                        <div key={pelis.id} className="movie_card">
                            <img className="foto_peli" src={`https://image.tmdb.org/t/p/w500${pelis.poster_path}`} alt={pelis.original_title} />
                            <h2 className="title">Título: {pelis.original_title} </h2>
                            <h3 className="subtitle">Fecha: {pelis.release_date}</h3>
                            <p className="parrafo"> {pelis.overview} </p>
                            <p className="parrafo"> <span className="negrita">popularidad:</span> {pelis.popularity} </p>
                            <p className="parrafo"> <span className="negrita">average:</span> {pelis.vote_average} </p>
    
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
