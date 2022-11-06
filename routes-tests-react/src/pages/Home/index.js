import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <div className="App">
        <h1>Home</h1><br />
        <Link to="/about">About</Link><br />
        <Link to="/contacs">Contacs</Link>

        <hr />
      <Link to="/product/524">PRODUCT 524</Link>
      </div>
    </>

  );
}

export default Home;