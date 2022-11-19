import { Link } from "react-router-dom";

const CardItem = ({ id, image, name, rating }) => {
  return (
    <Link to={`/details/${id}`} className="card">
      <img className="card-image" src={image} alt={name} />
      <div className="card-info">
        <h4 className="card-info-name">{name}</h4>
        <h4 className="card-info-rating">{rating}</h4>
      </div>
    </Link>
  );
};

export default CardItem;
