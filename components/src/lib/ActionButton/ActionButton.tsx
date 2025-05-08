/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ComponentProps } from 'react';

export default function ActionButton({ children, ...props }: ComponentProps<'button'>) {
  return (
    <button css={buttonStyle} {...props}>
      {children}
    </button>
  );
}

const buttonStyle = css`
  background-color: white;
  color: rgba(51, 51, 51, 0.75);
  font-size: 15px;
  padding: 6px 20px;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid rgba(51, 51, 51, 0.25);
`;
