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
    <p>Dogs present today</p>
    <ul className="breedList">
        {breeds
        .filter((breeds) => breeds.present === true)
        .map((breeds, index) => (
            <li key = {index} className="breedItem">
                <section>
                    <p id="breedInfo">Name: {breeds.name}</p>
                    <p id="breedInfo">Present: {breeds.present ? "✅" : "❌"}</p>
                    <img id="breedImg" src={breeds.img} width="200px"/>
                </section></li>
        ))}
    </ul>
</section>
)
}



export default Breeds