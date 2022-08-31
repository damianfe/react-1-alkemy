import{Link} from 'react-router-dom';

function Header (){
return (
    
    <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <Link className='navbar-brand'to="/">DyR</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label='toggle-navigation'>
                <span className='navbar-toggle-icon'></span>
                </button>
           <div className='collapse navbar-collapse' id="navbarNav">
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link'to="/">Menu</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link'to="/listado">Listado</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link'to="/">Contacto</Link>
                </li>

            </ul>

           </div>
            </div>
           
        </nav>
        </header>
    )
}
export default Header;