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

          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <div class="home-container">
              {shows.map((item) => (
                <CardItem
                  key={item.show.id}
                  id={item.show.id}
                  image={
                    item.show.image
                      ? item.show.image.medium
                      : "https://storiavoce.com/wp-content/plugins/lightbox/images/No-image-found.jpg"
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
          <Heading text="This is the Home page." />
        </div>
      </Container>
    </>
  );
};

export default Home;
