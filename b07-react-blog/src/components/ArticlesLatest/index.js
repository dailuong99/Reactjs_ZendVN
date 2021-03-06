import './latest-news-list.css';
import ArticleItem from '../ArticleItem';
import MainTitle from '../shared/MainTitle';
import { useSelector } from 'react-redux';

export default function ArticlesLatest() {
  const posts = useSelector(state => state.Posts.articlesLatest)
  return (
    <div className="latest-news section">
      <div className="tcl-container">

        <MainTitle>
          Bài viết mới nhất
        </MainTitle>

        <div className="latest-news__list spacing">
          {posts.map((post, i) => <div key={i} className="latest-news__card">
            <ArticleItem post={post} />
          </div>
          )}
        </div>
      </div>
    </div>
  )
}