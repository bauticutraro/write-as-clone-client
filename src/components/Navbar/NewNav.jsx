import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ArticleNav,
  ArticleNavLeft,
  ArticleNavRight,
  Icon,
  Logo,
  Words,
  TargetName
} from './navbarStyles';
import { useSelector, useDispatch } from 'react-redux';
import { createArticleStart } from '../../containers/Article/articleActions';

const NewNav = () => {
  const dispatch = useDispatch();
  const { content } = useSelector(({ article }) => article);

  const router = useRouter();

  const handleSend = async () => {
    await dispatch(createArticleStart({ content }));
    router.push('/posts');
  };

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

        <Icon onClick={handleSend} src='/send.png' alt='' />
      </ArticleNavRight>
    </ArticleNav>
  );
};

export default NewNav;
