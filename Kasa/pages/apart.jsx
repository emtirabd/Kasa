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
             <div className="apart-content">
          <div className="apart-infos">
            <div>
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
            <div className="profil">
              <div className="profil-host">
                <p>{appartement.host.name}</p>
                <img src={appartement.host.picture} alt="Profil de l'hôte" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Apart;