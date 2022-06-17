import { render, screen } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

describe("TEST APP", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  test("header exists", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});
