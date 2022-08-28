import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import store from '../redux/store';
import Drivers from '../pages/DriversPage';


test("displays the title 'Driver's Standings' ", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Drivers />
      </Provider>,
    );
    expect(getByText("Drivers list")).toBeInTheDocument();
  });

  test('renders the page', () => {
    const driversPage = render(
      <Provider store={store}>
        <Drivers />
      </Provider>,
    );
    expect(driversPage).toMatchSnapshot();
  });