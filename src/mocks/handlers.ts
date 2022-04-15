import { rest } from "msw";
import * as mocks from "./mocks";

export const handlers = [
  rest.get("*/user/consents/GetUserConsents", (reg, res, ctx) => {
    return res(ctx.status(200), ctx.json(mocks.targetedConsents));
  }),

  rest.get("*/languages/all", (reg, res, ctx) => {
    return res(ctx.status(200), ctx.json(mocks.allLanguages));
  }),
];
