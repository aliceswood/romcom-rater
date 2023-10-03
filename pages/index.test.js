import Home, {filteredUrl} from "./index";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import fetchMock from "jest-fetch-mock";;

const filmOne = {title:'film-one'}
const filmTwo = {title:'film-two'}
const mockrepo = {results:[filmOne, filmTwo]}

beforeEach(() => {
  fetchMock.enableMocks();
  fetch.resetMocks();
});

describe("Homepage", () => {
  it("renders the homepage", async () => {

    await render(<Home repo={mockrepo}/>);
    expect(screen.getByTestId("filmTitle")).toBeInTheDocument();
    expect(screen.getByText('film-one'));
    expect(screen.getByText('film-two'));
    expect(screen.getByTestId("userPageLink")).toBeInTheDocument();
  });
});

describe("API call", () => {
  it("mocks the API fetch request and returns the correct data", async () => {
    global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(mockrepo),
  }))
  const response = await fetch('filteredUrl')
  const data = await response.json();
  expect(data).toEqual(mockrepo);
  });
});