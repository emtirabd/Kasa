import bannerAbout from "../src/assets/bannerAbout.png"

const About = () => {
    return (
        <div className="about">
            <div className="banner">
                <img src={bannerAbout} alt="Image de paysage montagneux" />
            </div>
        </div>
    );
};

export default About;
