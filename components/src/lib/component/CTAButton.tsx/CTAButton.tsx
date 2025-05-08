/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ComponentProps } from 'react';

export default function CTAButton({ children, ...props }: ComponentProps<'button'>) {
  return (
    <button css={buttonStyle} {...props}>
      {children}
    </button>
  );
}

const buttonStyle = css`
  background-color: #333;
  color: white;
  font-size: 15px;
  padding: 6px 20px;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
`;
