import "@testing-library/jest-dom";
import SignUpForm from "./SignUpForm";
import {render, screen} from "@testing-library/react";

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe("signUpForm", () => {
  it("renders the sign up Form correctly", () => {
    render(<SignUpForm/>)
    expect(screen.getByTestId("nameField")).toBeInTheDocument();
    expect(screen.getByTestId("emailField")).toBeInTheDocument();
    expect(screen.getByTestId("usernameField")).toBeInTheDocument();
    expect(screen.getByTestId("passwordField")).toBeInTheDocument();
    expect(screen.getByTestId("signUpButton")).toBeInTheDocument();
  });
});