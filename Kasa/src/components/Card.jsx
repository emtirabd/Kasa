import PropTypes from "prop-types";

const Card = ({Appartement}) => {
    return (
        Appartement.map((appartement)=>(
            <div className="card" key={appartement.id}>
            <img src={appartement.cover} alt={appartement.title} />
            <h2>{appartement.title}</h2>
            </div>
        ))
    );
};

Card.propTypes = {
    Appartement: PropTypes.array.isRequired
}

export default Card;