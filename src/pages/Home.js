import { useContext } from "react";
import Container from "react-bootstrap/Container";

import ShowsContext from "../contexts/shows/showsContext";
import CardItem from "../components/CardItem";
import Search from "../components/Search";
import Heading from "../components/Heading";

const Home = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <>
      <Container>
        <div className="home-page">
          <Search />
          <Heading text="This is the Home page." />
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <div>
              {shows.map((item) => (
                <CardItem
                  key={item.show.id}
                  id={item.show.id}
                  image={
                    item.show.image
                      ? item.show.image.medium
                      : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                  }
                  name={item.show.name}
                  rating={
                    item.show.rating.average
                      ? item.show.rating.average
                      : "No rating"
                  }
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;
