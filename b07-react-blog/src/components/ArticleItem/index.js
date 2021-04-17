import './article-item.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';
export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  post = null
}) {

  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  })

  if(!post){
    return null;
  }

  return (
    <article className={classes}>
      <ArticleItemThumb imgthump={post.featured_media_url}  />
      <div className="article-item__content">

        { isShowCategoies && <ArticleItemCategories /> }
        { isShowCategoies && <ArticleItemStats view_count={post.view_count}/> }

        <ArticleItemTitle  title={post.title}  author={post.author_data.avatar}/>

        { isShowDesc && <ArticleItemDesc description={post.author_data.description} /> }

        <ArticleItemInfo nickname={post.author_data.nickname} isShowAvatar={isShowAvatar} date={post.date} />
      </div>
    </article>
  )
}