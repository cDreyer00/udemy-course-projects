import { Link } from "react-router-dom";
import "./error.css"

function PageNotFound() {
    return (
        <div className="error">
            <h1>404</h1>
            <h2>Page not found :(</h2>
            <Link to='/'>Home Page</Link>
        </div>
    )
}


export default PageNotFound;