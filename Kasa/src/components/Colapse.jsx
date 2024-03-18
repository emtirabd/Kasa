import { useState } from 'react';
import chevron from '../assets/chevron.svg';

const Colapse = ({title, content, id}) => {

    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
        console.log("toggleContent function called");
    };

    let toogleAnimation = showContent ? '' : 'close'

    return (

        <div className= {`collapse__content`} key={id}>
            <h2 onClick={toggleContent}>{title}  <img src={chevron} className={`icon ${toogleAnimation} `}/></h2>
            <div className= {`${toogleAnimation}`} >{content}</div>
        </div>
    );
};

export default Colapse;