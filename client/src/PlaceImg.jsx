import PropTypes from "prop-types";

export default function PlaceImg({ place, index = 0, className = null }) {
  if (!place.photos?.length) {
    return "";
  }

  if (!className) {
    className = "object-cover";
  }
  return (
    <img
      src={`http://localhost:4000/uploads/` + place.photos[index]}
      alt=""
      className={className}
    />
  );
}

PlaceImg.propTypes = {
  place: PropTypes.shape({
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number,
  className: PropTypes.string,
};
