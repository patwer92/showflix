import Container from "react-bootstrap/Container";

import Heading from "../components/Heading";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <Container>
        <Search />
        <div className="home-page">
          <Heading text="This is the Home page." />
        </div>
      </Container>
    </>
  );
};

export default Home;
