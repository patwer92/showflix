import { Link } from "react-router-dom";

const ListItem = ({ image, name, rating, id }) => {
  return (
    <Link to={`/singleshow/${id}`} className="card">
      <img class="card-image" src={image} alt={name} />
      <div className="card-info">
        <h4 className="card-info-name">{name}</h4>
        <h4 className="card-info-rating">{rating}</h4>
      </div>
    </Link>
  );
};

export default ListItem;
