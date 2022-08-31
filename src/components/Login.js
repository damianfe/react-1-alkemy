import axios from 'axios';
import swal from '@sweetalert/with-react';
import{useHistory} from 'react-router-dom';

function Login ()  {
const history = useHistory();



    

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    
    
        if (email === '' || password === '') {
            swal(<h2>los campos no se puede enviar vacios</h2>);
            
            return;
        }
    
        if (email !== '' && !regexEmail.test(email)) {
            swal(<h2>Debes escribir una direccion de correo electronico valido</h2>);
            return;
        }
    
        if(email !=='challenge@alkemy.org' || password !== 'react'){
        swal(<h2>credenciales invalidas</h2>);
        return;
    }
        
        axios
        .post('http://challenge-react.alkemy.org',{email, password})
        .then(res => {
            swal(<h2>Perfecto, Ingresaste Correctamente</h2>);
            const tokenR = res.data.token;
            localStorage.setItem('token', tokenR);
            history.push('/listado');
            
        })
    }
    return (
        <>
        
            <h2>Formulario de login</h2>
            <form onSubmit={ submitHandler }>
                <label>
                    <span>Correo electronico:</span><br />
                    <input type="text" name="email" />
                </label>
                <br />
                <label>
                    <span>Contraseña:</span><br />
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Ingresar</button>
            </form>
        </>
    );
}

export default Login;
