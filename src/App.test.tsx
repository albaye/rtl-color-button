import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelCase } from "./App";

test("button has correct initial color, and updates when clicked", () => {
  render(<App />);
  // find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(colorButton);

  // expect the backgroun color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  expect(colorButton).toHaveTextContent("Change to MediumVioletRed");
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox start out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("disable checkbox after click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button");
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);

  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

describe("spaces before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelCase("Red")).toBe("Red");
  });

  test("works for one inner capital letter", () => {
    expect(replaceCamelCase("MidnightBlue")).toBe("Midnight Blue");
  });

  test("works for multiple inner capital letters", () => {
    expect(replaceCamelCase("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
