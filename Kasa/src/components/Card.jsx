import PropTypes from "prop-types";

const Card = ({appartement}) => {
    return (

        <div className="card" key={appartement.id}>
            <img src={appartement.cover} alt={appartement.title} />
            <h2>{appartement.title}</h2>
        </div>
    );
};

Card.propTypes = {
    appartement: PropTypes.object.isRequired,
}

export default Card;