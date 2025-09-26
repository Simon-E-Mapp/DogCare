import { useEffect, useState } from "react"
import { Link } from "react-router"
import "./Breeds.css"


const Breeds = () =>{
    const [breeds, setBreeds] = useState([])
    const [expandedIndex, setExpandedIndex] = useState(null);

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
            <li key = {index} className="breedItem" onClick={() => 
                setExpandedIndex(expandedIndex === index ? null : index)
                }>
                <section>
                    <p className="breedInfo">Name: {breeds.name}</p>
                    <p className="breedInfo">Present: {breeds.present ? "✅" : "❌"}</p>
                    <img className="breedImg" src={breeds.img?.replace(/\.jpe?g$/, ".jpg")} width="200px"/>
                    {expandedIndex === index && (
                        <>
                        <p className="breedInfo">Sex: {breeds.sex}</p>
                        <p className="breedInfo">Breed: {breeds.breed}</p>
                        <p className="breedInfo">Age: {breeds.age}</p>
                        </>
                    )}                 
                </section>
            </li>
        ))}
    </ul>
</section>
)
}



export default Breeds