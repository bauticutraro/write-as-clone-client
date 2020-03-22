import React from 'react';
import Link from 'next/link';
// styles
import { Nav, MiniLogo, ButtonsWrapper, LinkItem } from './navbarStyles';

const Navbar = () => {
  return (
    <Nav>
      <Link href='/'>
        <MiniLogo src='/w-sq.svg' alt='' />
      </Link>
      <ButtonsWrapper>
        <Link href='/start'>
          <LinkItem>Sign Up</LinkItem>
        </Link>
        <Link href='/login'>
          <LinkItem login>Log in</LinkItem>
        </Link>
      </ButtonsWrapper>
    </Nav>
  );
};

export default React.memo(Navbar);
