/** @jsxImportSource @emotion/react */

import React from 'react';

import { css } from '@emotion/react';

const errorStyles = css`
    padding: 10px;
    background - color: #ff7c7c;
    color: #fff;
`;

function ErrorContainer({ children }) {
    return <div css={errorStyles}>{children}</div>
}

export default ErrorContainer;
