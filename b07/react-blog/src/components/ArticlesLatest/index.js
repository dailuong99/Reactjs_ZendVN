import './latest-news-list.css';
import ArticleItem from '../ArticleItem';
import MainTitle from '../shared/MainTitle';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchLatestPost } from './../../store/posts/actions';
import React, { useEffect } from 'react';
import { PostsService } from '../../services/posts';

export default function ArticlesLatest() {
  const state = useSelector(state => state.Posts)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(actFetchLatestPost())
  }, []);
 console.log('state',state)
  return (
    <div className="latest-news section">
      <div className="tcl-container">

        <MainTitle>
          Bài viết mới nhất
        </MainTitle>

        <div className="latest-news__list spacing">
          {/* {state.articlesLatest.map((e, i) => <div key={i} {...e} className="latest-news__card"> <ArticleItem /> </div>)} */}

        </div>
      </div>
    </div>
  )
}