import logoKasa from "../assets/logoKasa.svg"
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
       <div className="navbar">
        <img src={logoKasa} alt="Logo Kasa" />
        <nav>
            <ul>

                <li>
                    <NavLink to ="/" className={({isActive}) => (isActive ? "underline" : "")}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/about" className={({isActive}) => (isActive ? "underline" : "")}>
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
       </div>
    )
}

export default Navbar