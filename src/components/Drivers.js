import { PropTypes } from 'prop-types';
import '../assets/css/driver.css';

const Driver = (props) => {
  const { name, position, wins, points } = props;

  return (
    <>
      <div className="driver">
        <p>{name}</p>
        <p>{position}</p>
        <p>{wins}</p>
        <p>{points}</p>
      </div>
    </>
  );
};

Driver.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  wins: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
};
export default Driver;
