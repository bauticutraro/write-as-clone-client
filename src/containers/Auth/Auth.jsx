import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// styles & components
import Loader from '../../components/Loader/Loader';
import { Container } from './authStyles';

const Auth = () => {
  const dispatch = useDispatch();

  const {list, loading, error} = useSelector( ({auth}) => auth );

  if (loading) return <Loader />
  if (error) return <h1>Error</h1>

  return (
    <Container>
      <h1>Auth</h1>
   </Container>
  );
};
      
export default Auth;