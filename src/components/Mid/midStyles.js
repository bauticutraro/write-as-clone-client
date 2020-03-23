import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 400px;
  max-width: 100%;
`;

export const LogoContainer = styled.h1`
  text-align: center;
`;

export const Lema = styled.p`
  font-size: 2em;
  text-align: center;
`;

export const BottonMidWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StartButton = styled.button`
  border: 1px solid #7278bf;
  background: #7278bf;
  color: #fff;
  margin-top: 3em;
  font-size: 21px;
  padding: 0.5em;
  font-family: Lora, serif;
  transition: all 0.2s ease-out;
  border-radius: 0.25em;
  cursor: pointer;
  outline: none;
`;

export const TryOut = styled.p`
  font-size: 1.6em;
  color: #444;
  margin-top: 2rem;
  font-style: italic;
`;
