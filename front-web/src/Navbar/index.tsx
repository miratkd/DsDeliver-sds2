import './styles.css';
import {ReactComponent as Logo} from './Logo.svg';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="Logo-Text"> Ds Delivery</Link>
        </nav>
    )
}

export default Navbar;