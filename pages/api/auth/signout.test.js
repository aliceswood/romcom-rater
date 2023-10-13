import handler from "./signout.js";
import { createMocks } from "node-mocks-http";

describe("Sign out", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("user sign out", async () => {
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        cookie: 'test'
      }
    });
   
    await handler(req, res);

    const headers = res._getHeaders()
    const cookie = headers['set-cookie']
    expect(cookie[0]).toMatch('RomCom Rater Cookie=;')
  });
})