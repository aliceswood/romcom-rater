import registerUser from "./register";
import { supabase } from "../../lib/initSupabase";
import { createMocks } from "node-mocks-http";

jest.mock("../../lib/initSupabase");

describe("registerUser", () => {
  it("user signed up", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        email: "email",
        password: "password",
        name: "name",
        username: "username",
      },
    });

    jest.spyOn(supabase.auth, "signUp").mockReturnValue({ user: "test" });

    await registerUser(req, res);

    expect(supabase.auth.signUp).toHaveBeenCalledWith({
      email: "email",
      password: "password",
      options: {
        data: {
          name: "name",
          username: "username",
        },
      },
    });

    expect(res._getStatusCode()).toEqual(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        user: "test",
      })
    );
  });
  
  it("throws an error", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        email: "email",
        password: "password",
        name: "name",
        username: "username",
      },
    });

    const mockError = new Error("Sign up error");
    
    jest.fn().mockReturnValue({ user: null, error: mockError });
    jest.spyOn(supabase.auth, "signUp").mockReturnValue({ error: mockError });

    await registerUser(req, res);

    expect(res._getStatusCode()).toEqual(401);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        error: mockError.message,
      })
    );
  });
});
