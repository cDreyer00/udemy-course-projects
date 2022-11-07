import "./header.css"
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <Link className="logo" to="/">Prime Flix</Link>
            <Link className="pinneds" to="/pinneds">Pinned Movies</Link>
        </header>
    )
}

export default Header;