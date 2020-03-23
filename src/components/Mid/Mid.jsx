import React from 'react';
import Link from 'next/link';
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
        <Link href='/new'>
          <StartButton>Start writing</StartButton>
        </Link>
        <TryOut>
          Try it out without signing up, or{' '}
          <Link href='/start'>
            <a>sign up now</a>
          </Link>
        </TryOut>
      </BottonMidWrapper>
    </Container>
  );
};

export default React.memo(Mid);
