import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
`;

export const MiniLogo = styled.img`
  height: 38px;
  cursor: pointer;
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

// New

export const ArticleNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArticleNavLeft = styled(ArticleNav)``;

export const ArticleNavRight = styled(ArticleNav)``;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  opacity: 0.2;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const Logo = styled.h1`
  display: inline-block;
  font-family: Lora, serif;
  margin: 0;
  font-size: 1.5em;
`;

export const Words = styled.p`
  color: #777;
  font-size: 14px;
  font-family: 'Lora', sans-serif;
`;

export const TargetName = styled.p`
  color: #333;
`;
