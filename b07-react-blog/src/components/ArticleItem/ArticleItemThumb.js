// import { Link } from 'react-router-dom';

export default function ArticleItemThumb({imgthump}) {
  return (
    <div className="article-item__thumbnail">
      <a href="/">
        <img src={imgthump} alt="assets/images/blog-1.jpg" />
      </a>
    </div>
  )
}