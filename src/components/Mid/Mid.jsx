import React from 'react';
// styles
import {
  Container,
  LogoContainer,
  Logo,
  Lema,
  BottonMidWrapper,
  StartButton,
  TryOut
} from './midStyles';

const Mid = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src='/logo.svg' alt='' />
      </LogoContainer>
      <Lema>A place for focused writing.</Lema>
      <BottonMidWrapper>
        <StartButton>Start writing</StartButton>
        <TryOut>Try it out without signing up, or sign up now.</TryOut>
      </BottonMidWrapper>
    </Container>
  );
};

export default React.memo(Mid);
