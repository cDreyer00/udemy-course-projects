import {Link} from "react-router-dom"

function About() {
  const homePath = "/" ;

    return (
      <div className="App">
        <h1>About</h1><br/>
        <Link to={homePath}>Home</Link>
      </div>
    );
  }
  
  export default About;