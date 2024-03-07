import logoKasa from "../assets/logoKasa.svg"
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
       <div className="navbar">
        <img src={logoKasa} alt="Logo Kasa" />
        <nav>
            <ul>
                <NavLink to ="/" className={({isActive}) => (isActive ? "underline" : "")}>
                <li>Accueil</li>
                </NavLink>
                <NavLink to ="/about" className={({isActive}) => (isActive ? "underline" : "")}>
                <li>A propos</li>
                </NavLink>
            </ul>
        </nav>
       </div>
    )
}

export default Navbar