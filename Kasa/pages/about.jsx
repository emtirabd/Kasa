import bannerAbout from "../src/assets/bannerAbout.png"
import Colapse from "../src/components/Colapse";
import infos from "../src/data/colapse.json";

const About = () => {
    return (
        <div className="about">
            <div className="banner">
                <img src={bannerAbout} alt="Image de paysage montagneux" />
            </div>
            <div className="colapses">
                {
                    infos.map((info)=>(
                        <Colapse title={info.title} content={info.content} id={info.id} key={info.id}/>
                        ))
                    }
            </div>
        </div>
    );
};

export default About;
