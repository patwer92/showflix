import PropTypes from "prop-types";

function Heading({ text }) {
  return <h1>{text}</h1>;
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
