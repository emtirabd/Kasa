import bannerAbout from "../src/assets/bannerAbout.png"
import Colapse from "../src/components/Colapse";
import info from "../src/data/colapse.json";

const About = () => {
    return (
        <div className="about">
            <div className="banner">
                <img src={bannerAbout} alt="Image de paysage montagneux" />
            </div>
            <div className="colapses">
                {
                    info.map((infos)=>(
                        <Colapse info={infos} key={infos.id}/>
                        ))
                    }
            </div>
        </div>
    );
};

export default About;
