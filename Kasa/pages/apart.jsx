import {useParams} from "react-router-dom";
import appartements from "../src/data/logements.json";
import Colapse from "../src/components/Colapse.jsx";

const findAppartID = (id) => {
    return appartements.find((appartement) => appartement.id === id);
}

const Apart = () => {
    const {id} = useParams();
    const appartement = findAppartID(id);
    return (
        <div className="apart">
           <div className="carousel">
            
           </div>
            <div className="apart-content">
                <div className="apart-infos">
                    <div className="apart-titles">
                        <div className="location">
                        <h2>{appartement.title}</h2>
                        <p>{appartement.location}</p>
                        <div className="tag">
                            <ul>
                                {appartement.tags.map((tags, index) => (
                                    <li key={index}>{tags}</li>
                                ))}
                            </ul>
                        </div>
                        </div>
                        <div className="profil-host">
                            <p>{appartement.host.name}</p>
                            <img src={appartement.host.picture} alt="Profil de l'hôte"/>
                        </div>
                    </div>
                   
                    <div className="colapses colapses-about">
                        <Colapse id={"1"} title={'Description'} content={appartement.description} />
                        <Colapse id={"1"} title={'Equipements'} content={
                            <ul>
                                {appartement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        } />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apart;