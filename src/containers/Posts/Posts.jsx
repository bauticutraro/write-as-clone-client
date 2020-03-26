import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsStart } from './postsActions';
// styles & components
import Loader from '../../components/Loader/Loader';
import PostItem from '../../components/PostItem/PostItem';
import { Container, User } from './postsStyles';

const Posts = ({ username }) => {
  const dispatch = useDispatch();

  const { list, loading, error } = useSelector(({ posts }) => posts);

  React.useEffect(() => {
    dispatch(getPostsStart());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <h1>Error</h1>;

  return (
    <Container>
      <User>{username}</User>
      {list.map(post => (
        <PostItem key={post._id} {...post} />
      ))}
    </Container>
  );
};

export default Posts;
