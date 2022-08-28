import driversReducer, { DRIVERS } from '../redux/drivers';
import constructorReducer, { CONSTRUCTORS } from '../redux/constructors';

describe('Reducers', () => {
  test('Display list of drivers when receiving DRIVERS type', () => {
    const drivers = [
      {
        0: {
          position: '1',
          points: '52',
          wins: '17',
          driverName: 'Chrispaix Kaze',
        },
      },
      {
        1: {
          position: '21',
          points: '0',
          wins: '0',
          driverName: 'Kliford Mankind',
        },
      },
    ];
    const newState = driversReducer([], {
      type: DRIVERS,
      drivers,
    });
    expect(newState).toEqual(drivers);
  });

  test('Display list of drivers when receiving CONSTRUCTORS type', () => {
    const constructors = [
      {
        0: {
          position: '1', points: '396', wins: '8', name: 'Red Bull',
        },
      },
      {
        1: {
          position: '2', points: '314', wins: '4', name: 'Ferrari',
        },
      },
      {
        9: {
          position: '10', points: '3', wins: '0', name: 'Williams',
        },
      },
    ];
    const newState = constructorReducer([], {
      type: CONSTRUCTORS,
      constructors,
    });
    expect(newState).toEqual(constructors);
  });
});
