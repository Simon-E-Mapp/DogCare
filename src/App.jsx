import { Link } from "react-router"


const App = () =>{

return(
<section>
    <p>Välkommen</p>
    <Link to="/Breeds">Breeds</Link>
    <Link to="/BreedsExtended">BreedsExtended</Link>
</section>
)
}



export default App