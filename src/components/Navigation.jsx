import logo from "../assets/img/logosion.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (<div className="nav-bar">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <nav className="menu">
            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="conocenos">Conocenos</a>
                </li>
                <li>
                    <a href="#">En Línea</a>
                </li>
                <li>
                    <a href="#">Media</a>
                </li>
                <li>
                    <a href="#">Oración</a>
                </li>
                <li>
                    <a href="#">Donativos</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
        </nav>
    </div>)
}
export default Navigation;