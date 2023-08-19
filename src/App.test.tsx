import React from 'react';
import { render, screen } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
import App from './App';

test('buttons has correct initial color', () => {
  const { container } = render(<App />);
  logRoles(container)
  // find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole('button', { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

// test('button has correct inital text', () => {
//   screen.getByRole('button', { name: "Change to blue" });
// })

// test('button turns blue when clicked', () => {

// })
