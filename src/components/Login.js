import axios from 'axios';
import swal from '@sweetalert/with-react';
import { useHistory,Redirect} from 'react-router-dom';
import '../css/login.css'

function Login() {
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

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swal(<h2>credenciales invalidas</h2>);
            return;
        }

        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                swal(<h2>Perfecto, Ingresaste Correctamente</h2>);
                const tokenR = res.data.token;
                localStorage.setItem('token', tokenR);
                history.push('/listado');

            })
    }
    let token = localStorage.getItem('token');
    return (
        <>
        {token && <Redirect to="/listado" /> }
            <div className='row'>
                <div className='col-6 offset-3'>
                    <h2>Formulario de login</h2>
                    <form onSubmit={ submitHandler }>
                        <label className='form-label d-block mt-2'>
                            <span>Correo electronico:</span><br />
                            <input className='form-control' type="text" name="email" />
                        </label>
                        <label className='form-label d-block mt-2'>
                            <span>Contraseña:</span><br />
                            <input className='form-control' type="password" name="password" />
                        </label>
                        <button className='btn btn-success mt-2' type="submit">Ingresar</button>

                    </form>
                </div>

            </div>
        </>

    );
}

export default Login;
