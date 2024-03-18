import { useState } from 'react';
import chevron from '../assets/chevron.svg';

const Colapse = ({title, content, id}) => {

    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    let toogleAnimation = showContent ? '' : 'close'

    return (

        <div className= {`colapse__content`} key={id}>
            <h2 >{title}  <img onClick={toggleContent} src={chevron} className={`icon ${toogleAnimation} `}/></h2>
            <div className= {`${toogleAnimation}`} >{content}</div>
        </div>
    );
};

export default Colapse;