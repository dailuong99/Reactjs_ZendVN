// import { Link } from 'react-router-dom';

export default function ArticleItemTitle({title}) 
 {
    return (
    <h2 className="article-item__title">
      <a href="post/:slug">{title.rendered}</a>
    </h2>
  )
}