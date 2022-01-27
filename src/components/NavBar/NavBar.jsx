import { Link } from "react-router-dom";
import "./SnavBar.css";
import logo from "./assets/steamlogo.png";
import CartWidget from "./CartWidget";



function NavBar() {


    return <>

        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img src={logo} alt="" className="logo"/>
                    for Argentina
                </Link>
                <ul className="nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active text-light" to='' aria-current="page">Juegos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to=''>Impuestos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to=''>Guia</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to='' tabIndex="-1" aria-disabled="true">Contacto</Link>
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
