import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 18%;
`;

export const AuthTitle = styled.h1`
  font-size: 38px;
  text-align: center;
`;

export const AuthSubtitle = styled.p`
  margin-bottom: 3em;
  color: #111;
  font-family: 'Open Sans', sans-serif;
  font-size: 19px;
`;

export const Input = styled.input`
  padding: 0.5em;
  font-family: Lora, 'Palatino Linotype', 'Book Antiqua', 'New York',
    'DejaVu serif', serif;
  font-size: 100%;
  border-radius: 0.25em;
  outline: none;
  border: 1px solid #999;
`;

export const Button = styled.input`
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
`;
