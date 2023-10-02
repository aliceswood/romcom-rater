import Home from "./index";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react"

describe("Homepage", () => {
  it("renders the homepage", () => {
    render(<Home/>);
    expect(screen.getByTestId("romComPlaceholder")).toBeInTheDocument();
    expect(screen.getByTestId("userPageLink")).toBeInTheDocument();
  });
});