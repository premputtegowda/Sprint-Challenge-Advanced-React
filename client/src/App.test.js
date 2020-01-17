import React from 'react';
// import ReactDOM from 'react-dom';
import { render, getByTestId } from '@testing-library/react';
import App from './App';

import Nav, {toggleMode} from './components/Nav';

test('renders learn react link', () => {
  render(<App />);
 
});

test('site heading is present', () => {
  const component = render(<App />);
  component.getByText(/popular players/i)

});



test("test toggle function", () => {
  expect(toggleMode(true)).toBe(false)
  expect(toggleMode(false)).toBe(true)

});

test("test toggle function", () => {
  
  const component=render(<Nav />);
  component.getByTestId(/toggle/i);
 
});




  