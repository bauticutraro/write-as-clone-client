import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// styles & components
import Loader from '../../components/Loader/Loader';
import { Container, TextArea } from './articleStyles';

const Article = () => {
  const dispatch = useDispatch();

  const { list, loading, error } = useSelector(({ article }) => article);

  //if (loading) return <Loader />;
  //if (error) return <h1>Error</h1>;

  return (
    <Container>
      <TextArea placeholder='Write...' />
    </Container>
  );
};

export default Article;
