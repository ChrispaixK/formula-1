import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Constructors from '../pages/ConstructorsPage';

test('Check content in Constructor page', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Constructors />
    </Provider>,
  );
  expect(getByText('Constructors list')).toBeInTheDocument();
});

test('Check if Constructor page render correctly', () => {
  const constructorPage = render(
    <Provider store={store}>
      <Constructors />
    </Provider>,
  );
  expect(constructorPage).toMatchSnapshot();
});
