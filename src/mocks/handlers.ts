import { rest } from "msw";
import * as mocks from "./mocks";

export const handlers = [
  rest.get("*/user/consents/GetUserConsents", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mocks.targetedConsents));
  }),

  rest.get("*/user/consents/SignUserConsents", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ count: 0, consents: [] }));
  }),
];
