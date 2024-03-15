import { useParams } from "react-router-dom";
import appartements from "../src/data/logements.json";

const findAppartID = (id) => {
    return appartements.find((appartement) => appartement.id === id);
}

const Apart = () => {
    const{id} = useParams();
    const appartement = findAppartID(id);
    const pictures = appartement.pictures;
    return (
        <div className="apart">
            {/* <div className="carousel">
            {pictures.map((picture, index)=>{
                return (
                    <img src={picture} alt={picture.title} key={picture, index} />
                    )
                }
                )}
                </div> */}
            <h1>voici l'appartement avec l'id {id}</h1>
            <p>voici le titre de l appart {appartement.title}</p>
        
        </div>
    );
};

export default Apart;