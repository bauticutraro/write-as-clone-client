import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsStart } from './postsActions';
// styles & components
import Loader from '../../components/Loader/Loader';
import { Container } from './postsStyles';

const Posts = () => {
  const dispatch = useDispatch();

  const { list, loading, error } = useSelector(({ posts }) => posts);

  React.useEffect(() => {
    dispatch(getPostsStart());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <h1>Error</h1>;

  return (
    <Container>
      <h1>Posts</h1>
    </Container>
  );
};

export default Posts;
