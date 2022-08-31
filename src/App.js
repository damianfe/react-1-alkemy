//Librerias
import { Switch, Route } from 'react-router-dom';

//Componentes
import Login from './components/Login';
import Listado from './components/Listado';
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

      </Switch>
      <Footer />

    </div>

  );
}

export default App;
