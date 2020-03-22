import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Log in to Write.as</h1>
      <h4>Get to your synced posts, blogs, and linked accounts.</h4>
      <form>
        <input type='text' placeholder='username' />
        <input type='text' placeholder='password' />
        <input type='button' value='Login' />
      </form>
      <p>
        No account yet? Sign up to start a blog and sync your posts. Or just
        start a new post now — no need to sign up!
      </p>
    </div>
  );
};

export default Login;
