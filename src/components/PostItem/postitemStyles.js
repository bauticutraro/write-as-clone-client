import styled from 'styled-components';

export const Container = styled.article`
  margin-bottom: 4em;
`;

export const PostDate = styled.time`
  color: #999;
  font-weight: 600;
  font-size: 26px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const PostContent = styled.p`
  color: #111;
  font-weight: 300;
`;
