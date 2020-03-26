import React from 'react';
import Link from 'next/link';
import {
  ArticleNav,
  ArticleNavLeft,
  ArticleNavRight,
  Icon,
  Logo,
  Words,
  TargetName
} from './navbarStyles';
import { useSelector } from 'react-redux';

const NewNav = () => {
  const { content } = useSelector(({ article }) => article);
  return (
    <ArticleNav>
      <ArticleNavLeft>
        <Link href='/'>
          <Logo>write.as</Logo>
        </Link>

        <TargetName>Anonymous</TargetName>
        <Icon src='/arrow.png' alt='' />

        <Icon src='/font.png' alt='' />
        <Words>
          {content.trim().length ? content.trim().split(' ').length : 0} words
        </Words>
      </ArticleNavLeft>

      <ArticleNavRight>
        <Icon src='/theme.png' alt='' />
        <Link href='/posts'>
          <Icon src='/list.png' alt='' />
        </Link>
        <Icon src='/send.png' alt='' />
      </ArticleNavRight>
    </ArticleNav>
  );
};

export default NewNav;
