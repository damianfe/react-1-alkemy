import { Link, Redirect, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Listado() {
    let token = localStorage.getItem('token');

    const [moviesList, setMoviesList]= useState([]);

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=9d25fdd4931257a1123675e1b83107e0&language=es-ES&page=1';
        axios.get(endPoint)
            .then(response => {
                const apiData = response.data;
                setMoviesList(apiData.results);
            })
    }, [setMoviesList])

    console.log(moviesList);

    return (
        <>

            { !token && <Redirect to="/" /> }
            <div className='row'>

                <div className="col-3" >
                    <div className="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Movie title</h5>
                            <p className="card-text">Review s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                            <Link href="/" className="btn btn-primary">view detail</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )

}

export default Listado;
