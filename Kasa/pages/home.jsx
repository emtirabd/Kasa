import bannerHome from "../src/assets/bannerHome.png"

const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img src={bannerHome} alt="Image de paysage montagneux" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    );
};

export default Home;