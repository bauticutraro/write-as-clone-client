import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../containers/Auth/authActions';
// styles
import { Nav, MiniLogo, ButtonsWrapper, LinkItem } from './navbarStyles';

const Navbar = () => {
  const dispatch = useDispatch();

  const { isAuth } = useSelector(({ auth }) => auth);

  const router = useRouter();

  const handleLogout = async () => {
    await dispatch(logout());
    router.push('/');
  };

  return (
    <Nav>
      <Link href='/'>
        <MiniLogo src='/w-sq.svg' alt='' />
      </Link>
      <ButtonsWrapper>
        {!isAuth ? (
          <>
            <Link href='/start'>
              <LinkItem>Sign Up</LinkItem>
            </Link>
            <Link href='/login'>
              <LinkItem login>Log in</LinkItem>
            </Link>
          </>
        ) : (
          <LinkItem login onClick={handleLogout}>
            Log out
          </LinkItem>
        )}
      </ButtonsWrapper>
    </Nav>
  );
};

export default React.memo(Navbar);
