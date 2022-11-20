import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

// Context
import ShowsContext from "../context/shows/showsContext";

// Components
import Loader from "../components/Loader";

const Singlepage = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);

  useEffect(() => {
    getSingleShow(match.params.id);
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="details-container">
          <Link to="/">
            <ChevronLeftIcon className="to-home-btn" />
          </Link>

          <div className="show-card">
            <img
              src={
                singleShow.image
                  ? singleShow.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              alt={singleShow.name}
              className="cover"
            />

            <div className="hero">
              <div className="details">
                <div className="title">{singleShow.name}</div>

                <fieldset className="rating">
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    value="5"
                    defaultChecked={true}
                  />
                  <label
                    className="full"
                    htmlFor="star5"
                    title="Awesome - 5 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star4half"
                    name="rating"
                    value="4 and a half"
                    defaultChecked={true}
                  />
                  <label
                    className="half"
                    htmlFor="star4half"
                    title="Pretty good - 4.5 stars"
                    defaultChecked={true}
                  ></label>
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    value="4"
                    defaultChecked={true}
                  />
                  <label
                    className="full"
                    htmlFor="star4"
                    title="Pretty good - 4 stars"
                    defaultChecked={true}
                  ></label>
                  <input
                    type="radio"
                    id="star3half"
                    name="rating"
                    value="3 and a half"
                    defaultChecked={true}
                  />
                  <label
                    className="half"
                    htmlFor="star3half"
                    title="Meh - 3.5 stars"
                  ></label>
                  <input type="radio" id="star3" name="rating" value="3" />
                  <label
                    className="full"
                    htmlFor="star3"
                    title="Meh - 3 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star2half"
                    name="rating"
                    value="2 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star2half"
                    title="Kinda bad - 2.5 stars"
                  ></label>
                  <input type="radio" id="star2" name="rating" value="2" />
                  <label
                    className="full"
                    htmlFor="star2"
                    title="Kinda bad - 2 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star1half"
                    name="rating"
                    value="1 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star1half"
                    title="Meh - 1.5 stars"
                  ></label>
                  <input type="radio" id="star1" name="rating" value="1" />
                  <label
                    className="full"
                    htmlFor="star1"
                    title="Sucks big time - 1 star"
                  ></label>
                  <input
                    type="radio"
                    id="starhalf"
                    name="rating"
                    value="half"
                  />
                  <label
                    className="half"
                    htmlFor="starhalf"
                    title="Sucks big time - 0.5 stars"
                  ></label>
                </fieldset>

                <span className="score">
                  Rating:{" "}
                  <strong>
                    {singleShow.rating ? singleShow.rating.average : ""}
                  </strong>
                </span>
              </div>
            </div>

            <div className="description">
              <div className="column1">
                {singleShow.genres &&
                  singleShow.genres.map((genre) => (
                    <span key={genre} className="singlepage-genre">
                      {genre}
                    </span>
                  ))}
              </div>

              <div className="column2">
                <h3>Summary</h3>
                <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Singlepage;
