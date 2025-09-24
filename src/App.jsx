import { Link } from "react-router"
import "./Components/Breeds.css"


const App = () =>{

return(
<section id="navBar">
    <p>Välkommen</p>
    <Link to="/Breeds">Breeds</Link>
    <Link to="/BreedsExtended">BreedsExtended</Link>
    <p id="about">Welcome to the DogCare of the century</p>
</section>

)
}



export default App