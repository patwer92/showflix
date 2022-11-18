import Container from "react-bootstrap/Container";

import Heading from "../components/Heading";

const About = () => {
  return (
    <>
      <Container>
        <div className="about-page">
          <Heading text="This is the About page." />
        </div>
      </Container>
    </>
  );
};

export default About;
