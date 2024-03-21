import starFilled from '../assets/star-filled.svg';
import starEmpty from '../assets/star-empty.svg';

const ApartmentRating = ({ rating }) => {
    // Convertir la note en nombre
    const ratingValue = parseInt(rating);

    // Générer un tableau avec 5 éléments pour représenter les étoiles
    const stars = Array.from({ length: 5 }, (_, index) => {
        // Déterminer la classe CSS de l'étoile en fonction de l'index et de la note
        const starImagePath = index < ratingValue ? starFilled : starEmpty;
        return <img src={starImagePath} alt="star" key={index} />;
    });

    return (
        <div className="apartment-rating">
            {stars}
        </div>
    );
};

export default ApartmentRating;