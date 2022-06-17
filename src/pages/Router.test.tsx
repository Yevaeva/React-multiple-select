import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("TEST Router", () => {
  test("Router test", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homePage = screen.getByTestId("homePage");

    expect(homePage).toBeInTheDocument();
    const input = screen.getByTestId("inputText");
    fireEvent.input(input, {
      target: { value: "Armenia" },
    });
    const option = screen.getByTestId("option");
    fireEvent.click(option);

    const singleLink = screen.getByTestId("singleLink");
    userEvent.click(singleLink);
    const singlePage = screen.getByTestId("singlePage");
    expect(singlePage).toBeInTheDocument();
  });

  test("Not found page test", () => {
    render(
      <MemoryRouter initialEntries={["/kjksdn"]}>
        <App />
      </MemoryRouter>
    );
    const notfoundPage = screen.getByTestId("not-found-page");

    expect(notfoundPage).toBeInTheDocument();
  });
});
