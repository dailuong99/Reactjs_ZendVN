import avata from '../../assets/images/john-doe.png';

export default function ArticleItemAvatar() {
  return (
    <div className="article-item__author-image">
      <a aria-label="John Doe" href="/">
        <img src={avata} alt="john-doe" />
      </a>
    </div>
  )
}