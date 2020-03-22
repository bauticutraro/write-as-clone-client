import React from 'react';
import PropTypes from 'prop-types';
// styles
import { Container } from './navbarStyles';

const Navbar = () => {
  return (
    <Container>
      <img src='/w-sq.svg' alt='' />
      <button>Sign up</button>
      <button>Log in</button>
    </Container>
  );
};

Navbar.propTypes = {};

export default React.memo(Navbar);
