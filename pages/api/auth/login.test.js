import handler from "./login.js";
import { supabase } from "../../../lib/initSupabase";
import { createMocks } from "node-mocks-http";

jest.mock("../../../lib/initSupabase");

describe('Login', () => {
  it('logs in when correct details are provided', async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        email: "email@example.com",
        password: "password",
        name: "name",
        username: "username",
      },
    })

    jest.spyOn(supabase.auth, "signInWithPassword").mockReturnValue({
      data: { user: "test" },
      error: null,
    });

    await handler(req, res);

    expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
      email: "email@example.com",
      password: "password",
    });

    expect(res._getStatusCode()).toEqual(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        user: "test",
      })
    );
  })

  it('throws an error when incorrect details are given', async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        email: "email@example.com",
        password: "password",
      },
    });
    const mockError = new Error("Login error");
    
    jest.fn().mockReturnValue({ user: null, error: mockError });
    jest.spyOn(supabase.auth, "signInWithPassword").mockReturnValue({ error: mockError });
    
    await handler(req, res);

    expect(res._getStatusCode()).toEqual(401);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        error: mockError.message,
      })
    );
  });
});