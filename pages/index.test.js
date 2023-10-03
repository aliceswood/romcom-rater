import Home from "./index";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react"

const filmOne = {title:'film-one'}
const filmTwo = {title:'film-two'}
const mockrepo = {results:[filmOne, filmTwo]}

describe("Homepage", () => {
  it("renders the homepage", async () => {

    await render(<Home repo={mockrepo}/>);
    expect(screen.getByTestId("filmTitle")).toBeInTheDocument();
    expect(screen.getByText('film-one'));
    expect(screen.getByText('film-two'));
    expect(screen.getByTestId("userPageLink")).toBeInTheDocument();
  });
});

