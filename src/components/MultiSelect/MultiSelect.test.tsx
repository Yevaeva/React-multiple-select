import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import { MemoryRouter } from "react-router-dom";

describe("TEST", () => {
  test("opens options when clicked select", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const select = screen.getByTestId("select");
    fireEvent.click(select);
    const options = screen.getByTestId("options");
    expect(options).toBeInTheDocument();
  });

  test("search testing", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const input = screen.getByTestId("inputText");
    fireEvent.input(input, {
      target: { value: "Armenia" },
    });
    const option = screen.getByTestId("option");
    expect(option.textContent).toEqual("Armenia");
  });
});
