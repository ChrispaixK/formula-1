import { PropTypes } from 'prop-types';
import '../assets/css/constructor.css';

const Constructor = (props) => {
  const { name, position, wins, points } = props;

  return (
    <>
      <div className="constructor">
        <p>{name}</p>
        <p>{position}</p>
        <p>{wins}</p>
        <p>{points}</p>
      </div>
    </>
  );
};

Constructor.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  wins: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
};

export default Constructor;
