import { Link } from "react-router-dom";

const ListItem = ({ id, image, name, rating, language, runtime, genres }) => {
  return (
    <Link to={`/singleshow/${id}`} className="card-container">
      <div className="card">
        <img src={image} alt={name} className="card-image" />
        <div className="card-text-container">
          <div className="card-title">
            <h2>{name}</h2>
            <ul className="card-list">
              <li>
                {genres &&
                  genres.map((genre) => <span key={genre}>{genre}</span>)}
              </li>
            </ul>
          </div>
          <div className="card-summary">
            <p>
              Rating:<span>{rating}</span>
            </p>
            <p>
              Language:<span>{language}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
