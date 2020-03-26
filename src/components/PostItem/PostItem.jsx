import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import moment from 'moment';
// styles
import { Container, PostDate, PostContent } from './postitemStyles';

const PostItem = ({ content, user, created }) => {
  return (
    <Container>
      <Link
        href='/[username]/[content]'
        as={`/${user?.username || 'anonymous'}/${content
          .toLowerCase()
          .split(' ')
          .join('-')}`}
      >
        <PostDate>{moment(created).format('DD-MM-YYYY')}</PostDate>
      </Link>

      <PostContent>{content}</PostContent>
    </Container>
  );
};

PostItem.propTypes = {
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired
};

export default React.memo(PostItem);
