import React from 'react';

const Start = () => {
  return (
    <div>
      <h1>Start writing</h1>
      <h4>
        Try out basic publishing on Write.as for as long as you want, for free.
        It includes our core publishing features on a single blog. Whenever
        you're ready, you can upgrade to Pro to get everything Write.as has to
        offer.
      </h4>
      <form>
        <label>Username</label>
        <input type='text' placeholder='' />
        <small>write.as/your-username/</small>
        <label>Password</label>
        <input type='text' />
        <label>Email (optional)</label>
        <input type='text' placeholder='me@example.com' />
        <input type='button' value='Start Trial' />
      </form>
    </div>
  );
};

export default Start;
