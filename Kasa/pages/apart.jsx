import {useParams} from "react-router-dom";
import appartements from "../src/data/logements.json";
import Colapse from "../src/components/Colapse.jsx";
import ApartmentRating from "../src/components/Rating.jsx";
import Error from '../pages/error.jsx'

const findAppartID = (id) => {
    return appartements.find((appartement) => appartement.id === id);
}

const Apart = () => {
    const {id} = useParams();
    const appartement = findAppartID(id);

    if(appartement === undefined) {
        return <Error />
    }

    return (
        <div className="apart">
           <div className="carousel">
            
           </div>
            <div className="apart-content">
                
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
                            <div className="host-infos">
                            <p>{appartement.host.name}</p>
                            <img src={appartement.host.picture} alt="Profil de l'hôte"/>
                            </div>
                            <ApartmentRating rating={appartement.rating}/>
                        </div>
                    </div>
                   
                    <div className="colapses colapses-about">
                        <div className ="colapse-description">
                        <Colapse id={"1"} title={'Description'} content={appartement.description} />
                        </div>
                        <div className ="colapse-equipment">
                        <Colapse className ="colapse-equipment"  id={"1"} title={'Equipements'} content={
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