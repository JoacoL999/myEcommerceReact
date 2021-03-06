import { Link } from "react-router-dom";
import "./SnavBar.css";
import logo from "./assets/steamlogo.png";
import CartWidget from "./CartWidget";
import './../../global.css'
import { useState } from 'react'



function NavBar() {

    const [show, setShow] = useState(false);


 


    return <>

        <nav className="navbar navbar-dark bg-nDark ">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img src={logo} alt="" className="logo"/>
                    for Argentina
                </Link>
                <ul className="nav mb-2 mb-lg-0">
                    <li className="nav-item ddd">
                    <span className="nav-link dropdown-toggle text-light" onClick={()=>setShow(!show)}>
                    Juegos
                        </span>
                        <ul className="dropdown-menu bg-dark text-light " style={show?{display:"block"}:{display:'none'}} aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item text-light" to='GameList'>Todos</Link>
                        <li><hr className="dropdown-divider bg-greenL" /></li>
                        <li><Link className="dropdown-item text-light"  to='GameGenres/Action'>Accion</Link></li>
                        <li><Link className="dropdown-item text-light" to='GameGenres/Adventure'>Aventura</Link></li>
                        <li><Link className="dropdown-item text-light" to='GameGenres/Rol'>Rol</Link></li>
                        <li><Link className="dropdown-item text-light" to='GameGenres/Simulator'>Simuladores</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to='Tax'>Impuestos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to='Payment'>Guia</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to='Contact'>Contacto</Link>
                    </li>
                    <li className="nav-item mx-3">  
                    </li>
                    <CartWidget />
                    </ul>
                    
            </div>  
        </nav>
        </>
}




export default NavBar;
