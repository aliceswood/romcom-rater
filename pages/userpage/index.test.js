import UserPage from "./index"
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react"

describe("UserPage", () =>{
  it("renders the userpage correctly", () => {
    render(<UserPage/>)
    expect(screen.getByTestId('Image')).toBeInTheDocument();
    expect(screen.getByTestId('homeLink')).toBeInTheDocument();
  });
});