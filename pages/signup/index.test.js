import SignUpPage from "./index.js";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import mockRouter from 'next-router-mock';
;

jest.mock('next/router', () => jest.requireActual('next-router-mock'));


describe("signUpPage", () => {
  it("renders the sign up page correctly", () => {
    mockRouter.push("/signup");

    render(<SignUpPage/>)
    expect(screen.getByTestId('logInPage')).toBeInTheDocument();
    expect(screen.getByText('Sign up!')).toBeInTheDocument();
  });
});