import bannerHome from "../src/assets/bannerHome.png"
import Card from "../src/components/Card";
import Appartements from "../src/data/logements.json"

const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img src={bannerHome} alt="Image de paysage montagneux" />
                <h1><span>Chez vous,</span> <span>partout et ailleurs</span></h1>
            </div>
            <div className="gallery">
                {
                    Appartements.map((appartement)=>(
                        <Card appartement={appartement} key={appartement.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;