import {Switch,Route} from 'react-router-dom';


import Login from './components/Login';
import Listado from './components/Listado';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/listado" component={Listado}/>

    </Switch>
    
    </>
   
  );
}

export default App;
