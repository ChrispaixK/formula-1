import '../assets/css/driver.css';

const Driver = () => {
  const objSample = {
    name: 'Driver',
    position: '12',
    wins: '245',
    points: '2015',
  };
  return (
    <>
      <div className="driver">
        <p>{objSample.name}</p>
        <p>{objSample.position}</p>
        <p>{objSample.wins}</p>
        <p>{objSample.points}</p>
      </div>
    </>
  );
};

export default Driver;
