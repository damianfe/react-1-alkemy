import{Link} from 'react-router-dom';

function Header (){
return (
    
    <header className='d-flex justify-content-center py-3 dark bg-dark'  >
        <nav className='navbar navbar-dark bg-dark'>
            <ul className='nav nav-pills me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                    <Link to="/">Menu</Link>
                </li>
                <li className='nav-item'>
                <Link to="/listado">Listado</Link>
                </li>
                <li className='nav-item'>
                <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}
export default Header;