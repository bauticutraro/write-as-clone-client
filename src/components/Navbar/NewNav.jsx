import React from 'react';
import Link from 'next/link';
import {
  ArticleNav,
  ArticleNavLeft,
  ArticleNavRight,
  Icon
} from './navbarStyles';

const NewNav = () => {
  return (
    <ArticleNav>
      <ArticleNavLeft>
        <Link href='/'>
          <a>Write.as</a>
        </Link>

        <p>Anonymous</p>
        <Icon src='/arrow.png' alt='' />

        <Icon src='/font.png' alt='' />
        <p>0 words</p>
      </ArticleNavLeft>

      <ArticleNavRight>
        <Icon src='/theme.png' alt='' />
        <Icon src='/list.png' alt='' />
        <Icon src='/send.png' alt='' />
      </ArticleNavRight>
    </ArticleNav>
  );
};

export default NewNav;
