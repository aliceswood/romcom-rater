import Home from "../pages/index";
import "@testing-library/jest-dom";
import {fireEvent, render, screen} from "@testing-library/react"

describe("Homepage", () => {
  it("renders the homepage", () => {
    render(<Home/>);
    expect(screen.getByTestId("romComPlaceholder")).toBeInTheDocument();
    expect(screen.getByTestId("userPageLink")).toBeInTheDocument();
  });
});