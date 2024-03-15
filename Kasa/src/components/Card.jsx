import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({appartement}) => {
    return (

        <Link to={`/apart/${appartement.id}`} className="card" key={appartement.id}>
            <img src={appartement.cover} alt={appartement.title} />
            <h2>{appartement.title}</h2>
        </Link>
    );
};

Card.propTypes = {
    appartement: PropTypes.object.isRequired,
}

export default Card;