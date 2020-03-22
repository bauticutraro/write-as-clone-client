import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
`;

export const MiniLogo = styled.img`
  height: 38px;
`;

export const ButtonsWrapper = styled.div``;

export const LinkItem = styled.a`
  font-size: 1em;
  font-family: 'Open Sans', 'Segoe UI', Tahoma, Arial, sans-serif;
  color: #514f4f;
  margin: 20px;

  cursor: pointer;
  ${({ login }) =>
    login &&
    css`
      border: 1px solid #ccc;
      padding: 0.7rem 1rem;
      margin: 0;
      border-radius: 0.25em;
    `}
`;
