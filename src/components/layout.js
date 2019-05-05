import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
console.dir(mq);
export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      ${mq[0]} {
        padding: ${rhythm(1)};
      }
      ${mq[1]} {
        padding: ${rhythm(2)};
      }
      ${mq[2]} {
        padding: ${rhythm(3)};
      }
    `}
  >
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        Cameron Billings
      </h3>
    </Link>
    <Link
      to={`/contact/`}
      css={css`
        float: right;
      `}
    >
      Contact
    </Link>
    {children}
  </div>
);
