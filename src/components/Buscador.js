import { useHistory } from 'react-router-dom';
import swal from '@sweetalert/with-react';


function Buscador() {
    const history = useHistory();
    const submitHandler = (e) => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();

        

        if (keyword.length === 0) {
            swal(<h5>tiene que escribir una palabra clave</h5>);
        } else if (keyword.length < 4) {
            swal(<h5>tiene que escribir mas de 4 caracteres</h5>);
        }else{
            e.currentTarget.keyword.value='';
            history.push(`/resultados?keyword=${keyword}`)
        }
    }

    return (
        <form className="d-flex align-items-center" onSubmit={ submitHandler }>
            <label className='form-label mb-0 mx-2'>
                <input className='form-control' type="text" name="keyword" placeholder="Buscar..." />
            </label>
            <button className='btn btn-success' type="submit">Buscar</button>
        </form>
    )
}

export default Buscador;