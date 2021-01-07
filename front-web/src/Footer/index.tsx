import './styles.css';
import { ReactComponent} from "./linkedin.svg";

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior <br/> Lucas Mira 
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/lucas-mira-17514b203/" target="_new">
                <ReactComponent/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;