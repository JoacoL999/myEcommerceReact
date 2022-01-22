import "./SnavBar.css";
import logo from "./assets/steamlogo.png";
import CartWidget from "./CartWidget";



function NavBar() {

    return <>

        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="">
                    <img src={logo} alt="" className="logo"/>
                    for Argentina
                </a>
                <ul className="nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-light" href="#" aria-current="page">Juegos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Impuestos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Guia</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#" tabIndex="-1" aria-disabled="true">Contacto</a>
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
