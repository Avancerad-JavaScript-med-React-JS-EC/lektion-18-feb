import { render, getByTestId, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//App loads with initial state of 0

test('App loads with initial state of 0', () => {
  const { container } = render(<App />);
  const countValue = getByTestId(container, 'countvalue');
  expect(countValue.textContent).toBe('0');
});

//Incremental and decremental buttons work

test('Incremental and decremental buttons work', () => {
  const { container } = render(<App />);
  const countValue = getByTestId(container, 'countvalue');
  const incrementButton = getByTestId(container, 'increment');
  const decrementButton = getByTestId(container, 'decrement');

  expect(countValue.textContent).toBe('0');

  fireEvent.click(incrementButton);
  expect(countValue.textContent).toBe('1');
  
  fireEvent.click(decrementButton);
  expect(countValue.textContent).toBe('0');
});

//Change the name via input field so state changes

test('Change the name via input field so state changes', () => {
  const { container } = render(<App />);
  const nameValue = getByTestId(container, 'namevalue');
  const inputElem = getByTestId(container, 'inputname');

  expect(nameValue.textContent).toEqual('Hej ');

  fireEvent.change(inputElem, { target: { value: 'Christoffer' }});
  expect(nameValue.textContent).toEqual('Hej Christoffer');
});
