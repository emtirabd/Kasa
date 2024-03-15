import { useState } from 'react';
import PropTypes from "prop-types";

const Colapse = ({info}) => {

    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
        console.log("toggleContent function called");
    };

    return (

        <div className="colapse" key={info.id}>
            <h2 onClick={toggleContent}  className={showContent ? "active" : ""}>{info.title}</h2>
            <p className={showContent ? "show" : "hide"}>{info.content}</p>
        </div>
    );
};

Colapse.propTypes = {
    info: PropTypes.object.isRequired,
}

export default Colapse;