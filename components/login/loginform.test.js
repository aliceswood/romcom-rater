import "@testing-library/jest-dom";
import LogInForm from "./LogInForm";
import {render, screen} from "@testing-library/react";

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe("logInForm", () => {
  it("renders the log in Form correctly", () => {
    render(<LogInForm/>)
    expect(screen.getByTestId("emailField")).toBeInTheDocument();
    expect(screen.getByTestId("passwordField")).toBeInTheDocument();
    expect(screen.getByTestId("logInButton")).toBeInTheDocument();
  });
});