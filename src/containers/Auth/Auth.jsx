import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// styles & components
import Loader from '../../components/Loader/Loader';
import {
  Container,
  AuthTitle,
  AuthSubtitle,
  Input,
  Button,
  Form
} from './authStyles';
import useForm from '../../hooks/useForm';

const initialState = {
  username: '',
  password: '',
  email: ''
};

const Auth = ({ mode = 'login' }) => {
  const dispatch = useDispatch();

  const { values, handleChange } = useForm(initialState);

  const { isAuth, loading, error } = useSelector(({ auth }) => auth);

  const handleSubmit = () => {
    return null;
  };

  return (
    <Container>
      <AuthTitle>
        {mode === 'login' ? 'Log in to Write.as' : 'Start writing'}
      </AuthTitle>
      <AuthSubtitle>
        {mode === 'login'
          ? 'Get to your synced posts, blogs, and linked accounts.'
          : ` Try out basic publishing on Write.as for as long as you want, for free.
          It includes our core publishing features on a single blog. Whenever
          you're ready, you can upgrade to Pro to get everything Write.as has to
          offer.`}
      </AuthSubtitle>
      <Form>
        {mode === 'register' && <label>Username</label>}
        <Input
          type='text'
          placeholder={mode === 'login' ? 'username' : ''}
          name='username'
          onChange={handleChange}
        />
        {mode === 'register' && (
          <small>
            write.as/{values.username ? values.username : 'your-username'}/
          </small>
        )}

        {mode === 'register' && <label>Password</label>}
        <Input
          type='password'
          placeholder={mode === 'login' ? 'password' : ''}
          name='password'
          onChange={handleChange}
        />
        {mode === 'register' && (
          <>
            <label>Email (optional)</label>
            <Input
              type='text'
              placeholder='me@example.com'
              name='email'
              onChange={handleChange}
            />
          </>
        )}

        <Button type='button' value='Start Trial' onClick={handleSubmit} />
      </Form>

      {loading && !error && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}

      {mode === 'login' && (
        <p>
          No account yet? Sign up to start a blog and sync your posts. Or just
          start a new post now — no need to sign up!
        </p>
      )}
    </Container>
  );
};

export default Auth;
