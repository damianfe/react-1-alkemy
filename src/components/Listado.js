import { useHistory } from 'react-router-dom';
import {useEffect} from 'react';

function Listado() {

    const history= useHistory();
    

    useEffect(()=>{
        const token = localStorage.getItem('token');
        console.log(token)
        if(token === null){
            history.push('/')
            }    
   
    },[]);

    return (
    <h2>componente listado</h2>
    )

}

export default Listado;
