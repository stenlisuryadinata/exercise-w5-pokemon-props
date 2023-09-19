import PropTypes from 'prop-types';

// Destructure pokemon props here :)
const Pokemon = ({ name, types }) => {
  return (
    <div>
      <h2>{name}</h2>
      {types.map((type, i) => (
        <p key={i}>{type}</p>
      ))}
    </div>
  );
};

// Add prop type validation
Pokemon.propTypes = {
  name: PropTypes.string.isRequired, // Ensure "name" is a required string
  types: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure "types" is a required array of strings
};

export default Pokemon;