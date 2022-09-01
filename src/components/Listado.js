import { Link, Redirect, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react';


function Listado() {
    let token = sessionStorage.getItem('token');

    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=9d25fdd4931257a1123675e1b83107e0&language=es-ES&page=1';
        axios.get(endPoint)
            .then(response => {
                const apiData = response.data;
                setMoviesList(apiData.results);
            })
            .catch(error =>{
            swal(<h2>Hubo errores, intenta mas tarde</h2>)
            })
    }, [setMoviesList])

console.log(moviesList);

    return (
        <>

            { !token && <Redirect to="/" /> }

            <div className='row'>
                {
                    moviesList.map((oneMovie, idx) => {
                        return (

                            <div className="col-3" key={idx} >
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

export default Listado;
