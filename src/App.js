//Librerias
import { Switch, Route } from 'react-router-dom';

//Componentes
import Login from './components/Login';
import Listado from './components/Listado';
import Detalle from './components/Detalle';
import Resultados from './components/Resultados';
import Header from './components/Header';
import Footer from './components/Footer';

//Estilos
import './css/bootstrap.min.css';

/* import './css/app.css' */
function App() {
  return (
    <div className="container mt-3">
      <Header />

      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/listado" component={ Listado } />
        <Route path="/detalle" component={ Detalle } />
        <Route path="/resultados" component={ Resultados} />

      </Switch>
      <Footer />

    </div>

  );
}

export default App;
