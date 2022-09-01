//Librerias
import{useState,useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

//Componentes
import Login from './components/Login';
import Listado from './components/Listado';
import Detalle from './components/Detalle';
import Resultados from './components/Resultados';
import Favoritos from './components/Favoritos';
import Header from './components/Header';
import Footer from './components/Footer';

//Estilos
import './css/app.css';
import './css/bootstrap.min.css';

function App() {
  const [favorites, setFavorites]= useState([]);

useEffect(()=>{
const favsInLocal = localStorage.getItem('favs');
 console.log(favsInLocal);
 if(favsInLocal != null){
const favsArray = JSON.parse(favsInLocal);

setFavorites(favsArray)

}

},[])

  
  const addOrRemoveFromFavs = e => {
    const favMovies = localStorage.getItem('favs');

    let tempMovieInFavs;
  
    if (favMovies === null) {
      tempMovieInFavs = [];
    } else {
      tempMovieInFavs = JSON.parse(favMovies);
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = {
      imgURL, title, overview,
      id: btn.dataset.movieId
    }
    let movieIsInArray = tempMovieInFavs.find(oneMovie => {
      return oneMovie.id === movieData.id
    });
    if (!movieIsInArray) {
      tempMovieInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMovieInFavs));
      setFavorites(tempMovieInFavs);
      console.log('se agrego la pelicula')
    } else {
      let moviesLeft = tempMovieInFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavorites(moviesLeft);
      console.log('se elimino la pelicula');
    }


  }
  return (
    <div className="container mt-3">
      <Header favorites={favorites} />

      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/listado" render={ (props) => <Listado addOrRemoveFromFavs={ addOrRemoveFromFavs }{ ...props } /> } />
        <Route path="/detalle" component={ Detalle } />
        <Route path="/resultados" render={ (props) => <Resultados addOrRemoveFromFavs={ addOrRemoveFromFavs }{ ...props }/> }/>
        <Route path="/favoritos" render={ (props) => <Favoritos favorites={favorites} addOrRemoveFromFavs={ addOrRemoveFromFavs }{ ...props }/> }/>

      </Switch>
      <Footer />

    </div>

  );
}

export default App;
