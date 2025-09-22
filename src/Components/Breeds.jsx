import { useEffect, useState } from "react"
import { Link } from "react-router"
import "./Breeds.css"


const Breeds = () =>{
    const [breeds, setBreeds] = useState([])

    useEffect(()=> {
        fetch("https://api.jsonbin.io/v3/b/68cd24a9ae596e708ff3c68c/latest")
        .then(res => res.json())
        .then(data => {
            console.log("Breeds", data.record);
            setBreeds(data.record);
        })
    }, [])

return(
<section>
    <p>Välkommen</p>
    <Link to="/">Homepage</Link>
    <ul>
        {breeds.map((breeds, index) => (
            <li key = {index}>
                <section id="breedList">
                    <p id="breedInfo">Name: {breeds.name}</p>
                    <p id="breedInfo">Sex: {breeds.sex}</p>
                    <p id="breedInfo">Breed: {breeds.breed}</p>
                    <p id="breedInfo">Age: {breeds.age}</p>
                    <img id="breedImg" src={breeds.img} width="200px"/>
                </section></li>
        ))}
    </ul>
</section>
)
}



export default Breeds