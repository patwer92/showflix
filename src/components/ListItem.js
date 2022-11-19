import { Link } from "react-router-dom";

const ListItem = ({ image, name, rating, id }) => {
  return (
    <Link to={`/singleshow/${id}`} className="card-container">
      <div className="card">
        <img src={image} alt={name} className="card-image" />
        <div className="card-text-container">
          <div className="card-title">
            <h2>{name}</h2>
            <ul className="card-list">
              <li>CBS /</li>
              <li>60min /</li>
              <li>Adventure, Drama, Sci-Fi</li>
            </ul>
          </div>

          <div className="card-summary">
            <p>United States</p>
            <p>
              Rating:<span>{rating}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
