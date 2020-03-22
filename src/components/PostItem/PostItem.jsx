import React from 'react';
import PropTypes from 'prop-types';
// styles
import { Container } from './postitemStyles';

const PostItem = ({ title }) => {
  return (
    <Container>
      <p>{title}</p>
    </Container>
  );
};

PostItem.propTypes = {};

export default React.memo(PostItem);
