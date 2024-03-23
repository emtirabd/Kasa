import chevron from '../assets/chevron.svg'
import { useState } from 'react'

function Carousel({ source, title }) {

    let indexMax = source.length
    let [activeIndex, setActiveIndex] = useState(0)

    let movedLeft = () => {
        setActiveIndex((index) => (index === 0 ? source.length - 1 : index - 1))
    }
    let movedRight = () => {
        setActiveIndex((index) => (index === source.length - 1 ? 0 : index + 1))
    }

    return (
        <div className="carousel">
            {source.length > 1 ? (
                <div className="carousel-nav">
                    <img
                        onClick={movedLeft}
                        className="leftArrow"
                        src={chevron}
                        alt="Gauche"
                    />
                    <div className="index">
                        <p>
                            {parseInt(activeIndex + 1)}/{indexMax}
                        </p>
                    </div>
                    <img
                        onClick={movedRight}
                        className="rightArrow"
                        src={chevron}
                        alt="Droite"
                    />
                </div>
            ) : (
                ''
            )}

            <img
                className="carousel-pictures"
                src={source[activeIndex]}
                alt={title}
            />
        </div>
    )
}

export default Carousel