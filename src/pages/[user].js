import React from 'react';
import { useRouter } from 'next/router';
import PostContainer from '../containers/Posts/Posts';

const Posts = () => {
  const {
    query: { user }
  } = useRouter();

  return <PostContainer username={user} />;
};

export default Posts;
