import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticlesLatest from '../components/ArticlesLatest';
import ArticlesPopular from '../components/ArticlesPopular';
import ArticlesList from '../components/ArticlesList';

export default function Homepage() {
  
  return (
    <>
      <ArticlesLatest />
      <ArticlesPopular />
      <ArticlesList />
    </>
  )
}