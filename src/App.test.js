import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './state/store';
import App from './App';
import {AddTask} from "./task/AddTask";

export const AppWrapper = ({childens}) => (
    <Provider store={store}>
        <App>{childens}</App>
    </Provider>
)

test('renders toto app', () => {
  const { getByText } = render(<AppWrapper />);
  expect(getByText(/Todos/i)).toBeInTheDocument();
});

