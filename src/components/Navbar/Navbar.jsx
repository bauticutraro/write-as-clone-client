import React from 'react';
import PropTypes from 'prop-types';
// styles
import { Nav, MiniLogo, ButtonsWrapper, LinkItem } from './navbarStyles';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Nav>
      <MiniLogo src='/w-sq.svg' alt='' />
      <ButtonsWrapper>
        <Link href='/start'>
          <LinkItem>Sign Up</LinkItem>
        </Link>
        <Link href='/start'>
          <LinkItem login>Log in</LinkItem>
        </Link>
      </ButtonsWrapper>
    </Nav>
  );
};

Navbar.propTypes = {};

export default React.memo(Navbar);
