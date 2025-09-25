import { Link, Outlet } from "react-router"
import "./App.css"


const App = () =>{

return(
<section>
<section className= "navbar">
    <h1>Välkommen</h1>
</section>

<section className= "navbar2">
    <Link to="/">Homepage</Link>
    <Link to="/Breeds">Breeds</Link>
    <Link to="/BreedsExtended">BreedsExtended</Link>
</section>

<Outlet />
</section>
);
};



export default App