import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import axios from 'axios';

function Resultados() {
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');
const [moviesResults, setMoviesResults] = useState([]);

useEffect(()=>{
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=9d25fdd4931257a1123675e1b83107e0&lenguage=es-ES&query=${keyword}`;

        axios.get(endPoint)
            .then(response => {
                const moviesArray = response.data.results;
                if(moviesArray.length === 0){
                swal(<h4>Tu busqueda no arrojó resultados</h4>)
                };
                setMoviesResults(moviesArray)
            })
            .catch(error => {console.log(error)})

},[keyword])

//spider

    return (
        <>
        <h2>Buscaste: <em>{keyword}</em></h2>
        {moviesResults.length === 0 && <h3>No hay resultados</h3>}
            <div className='row'>
                {
                    moviesResults.map((oneMovie, idx) => {
                        return (

                            <div className="col-4" key={idx} >
                                <div className="card" my-4>
                                    <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} class="card-img-top" alt="Detalle del Producto" />
                                    <div className="card-body">
                                        <h5 className="card-title">{oneMovie.title.substring(0, 30)}...</h5>
                                        <p className="card-text">{oneMovie.overview.substring(0, 100)}</p>
                                        <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">view detail</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </>

    )
}

export default Resultados;