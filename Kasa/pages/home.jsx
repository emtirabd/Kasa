import bannerHome from "../src/assets/bannerHome.png"
import Card from "../src/components/Card";
import Appartement from "../src/data/logements.json"

const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img src={bannerHome} alt="Image de paysage montagneux" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallery">
                <Card Appartement = {Appartement} />
            </div>
        </div>
    );
};

export default Home;