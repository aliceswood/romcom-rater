import LogInPage from "./index.js";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));


describe("LogInPage", () => {
  it("renders the sign up page correctly", () => {
    mockRouter.push("/login");

    render(<LogInPage/>)
    expect(screen.getByTestId('signUpPage')).toBeInTheDocument();
    expect(screen.getByText('Log in!')).toBeInTheDocument();
  });
});