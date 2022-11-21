import { useContext } from "react";

import ShowsContext from "../context/shows/showsContext";
import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";
import ScrollToTopBtn from "../utils/ScrollToTopBtn";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div className="homepage">
      <Searchbar />
      {loading ? (
        <Loader />
      ) : (
        <div className="home-container">
          <ScrollToTopBtn />
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "No rating"
              }
              language={item.show.language}
              genres={item.show.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
