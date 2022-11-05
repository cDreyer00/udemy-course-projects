import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    const homePath = "/";
    const aboutPath = "/about";
    const contacsPath = "/contacs";

    return (
        <header>
            <h1>Header</h1>
            <div>
                <Link to={homePath}>Home</Link>
                <Link to={aboutPath}>About</Link>
                <Link to={contacsPath}>Contacs</Link>
            </div>
        </header>
    )
}

export default Header;