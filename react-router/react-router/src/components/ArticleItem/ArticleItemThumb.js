// import { Link } from 'react-router-dom';
import blog1 from '../../assets/images/blog-1.jpg';

export default function ArticleItemThumb() {
  return (
    <div className="article-item__thumbnail">
      <a href="/">
        <img src={blog1} alt="assets/images/blog-1.jpg" />
      </a>
    </div>
  )
}