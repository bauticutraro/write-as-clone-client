import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setContent } from './articleActions';
// styles & components
import Loader from '../../components/Loader/Loader';
import { Container, TextArea } from './articleStyles';

const Article = () => {
  const dispatch = useDispatch();

  const { list, loading, error } = useSelector(({ article }) => article);

  const [value] = React.useState('');

  const handleChange = ({ target }) =>
    dispatch(setContent({ content: target.value }));

  //if (loading) return <Loader />;
  //if (error) return <h1>Error</h1>;

  return (
    <Container>
      <TextArea placeholder='Write...' name='value' onChange={handleChange} />
    </Container>
  );
};

export default Article;
