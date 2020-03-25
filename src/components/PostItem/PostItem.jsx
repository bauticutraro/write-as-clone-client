import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import moment from 'moment';
// styles
import { Container } from './postitemStyles';

const PostItem = ({ content, user, created }) => {
  return (
    <Container>
      <Link
        href='/germancutraro/[content]'
        as={`/germancutraro/${content
          .toLowerCase()
          .split(' ')
          .join('-')}`}
      >
        <h3>{moment(created).format('DD-MM-YYYY')}</h3>
      </Link>

      <h3>{content}</h3>
    </Container>
  );
};

PostItem.propTypes = {
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired
};

export default React.memo(PostItem);
