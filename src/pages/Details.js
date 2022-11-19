import { useEffect, useContext } from "react";

import Container from "react-bootstrap/Container";
// import Heading from "../components/Heading";

import ShowsContext from "../contexts/shows/showsContext";

const Details = ({ match }) => {
  const { getDetails, showDetails, loading } = useContext(ShowsContext);

  useEffect(() => {
    getDetails(match.params.id);
  }, []);

  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <div className="details-page">
            <img
              src={
                showDetails.image
                  ? showDetails.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              alt={showDetails.name}
            />
            <div className="singleshow__info">
              <h1>{showDetails.name}</h1>
              {showDetails.genres &&
                showDetails.genres.map((genre) => (
                  <span key={genre} className="singleshow__genre">
                    {genre}
                  </span>
                ))}
              <p>
                <strong>Status:</strong>{" "}
                {showDetails.status && showDetails.status}
              </p>
              <p>
                <strong>Rating:</strong>{" "}
                {showDetails.rating ? showDetails.rating.average : "No rating"}
              </p>
              <p>
                <strong>Offical Site:</strong>{" "}
                {showDetails.officalSite ? (
                  <a
                    href={showDetails.officalSite}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {showDetails.officalSite}
                  </a>
                ) : (
                  "No offical site"
                )}
              </p>
              <p>{showDetails.summary && removeTags(showDetails.summary)}</p>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Details;
