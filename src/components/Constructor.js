import '../assets/css/constructor.css';

const Constructor = () => {
  const objSample = {
    name: 'Chrispaix',
    position: '12',
    wins: '245',
    points: '9523',
  };
  return (
    <>
      <div className="constructor">
        <p>{objSample.name}</p>
        <p>{objSample.position}</p>
        <p>{objSample.wins}</p>
        <p>{objSample.points}</p>
      </div>
    </>
  );
};

export default Constructor;
