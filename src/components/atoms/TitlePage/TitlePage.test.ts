import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TitlePage } from "./TitlePage";
import { MemoryRouter } from "react-router-dom";

describe("TitlePage", () => {
  it("renders the title", () => {
    render(
      <MemoryRouter>
        <TitlePage title="Account" />
      </MemoryRouter>
    );
    expect(screen.getByText("Account")).toBeInTheDocument();
  });
});

describe("TitlePage", () => {
  it("renders the title with a back button", () => {
    render(
      <MemoryRouter>
        <TitlePage title="Account" backToHomePage />
      </MemoryRouter>
    );
    expect(screen.getByText("Back to list")).toBeInTheDocument();
  });
});

describe("TitlePage", () => {
  it("renders the title with a custom style", () => {
    render(
      <MemoryRouter>
        <TitlePage title="Test Title" sx={{ color: "red" }} />
      </MemoryRouter>
    );
    expect(screen.getByText("Test Title")).toHaveStyle("color: red");
  });
});
