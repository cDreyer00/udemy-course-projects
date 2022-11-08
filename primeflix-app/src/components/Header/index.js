import "./header.css"
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <Link className="logo" to="/">Prime Flix</Link>
            <Link className="saved" to="/saved">Saved Movies</Link>
        </header>
    )
}

export default Header;