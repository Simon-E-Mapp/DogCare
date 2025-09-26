import { useEffect, useState } from "react"
import { Link } from "react-router"
import "./Breeds.css"


const BreedsExtended = () =>{
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
    <p>All dogs that are or have been present</p>
    <ul className="breedList">
        {breeds.map((breeds, index) => (
            <li key = {index} className="breedItem">
                <section>
                    <p className="breedInfo">Name: {breeds.name}</p>
                    <p className="breedInfo">Sex: {breeds.sex}</p>
                    <p className="breedInfo">Breed: {breeds.breed}</p>
                    <p className="breedInfo">Age: {breeds.age}</p>
                    <p className="breedInfo">Present: {breeds.present ? "✅" : "❌"}</p>
                    <img className="breedImg" src={breeds.img?.replace(/\.jpe?g$/, ".jpg")} width="200px"/>
                </section></li>
        ))}
    </ul>
</section>
)
}



export default BreedsExtended