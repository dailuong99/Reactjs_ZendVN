import React from 'react';
import Clock from './Clock';

export default function ListNew({
  imgBig = "#",
  imgAvata = "",
  altDescript = "",
  titleNew = "",
  nameAuthor = "",
  dateTimePost = "",
  timePost = "",
  aticleItem,
  classFormAround,
  textDiscriptTitle,
}) {
  return (
    <>
      <div className={classFormAround}>
        <article className={aticleItem}>
          <div className="article-item__thumbnail">
            <a href="#">
              <img src={imgBig} alt={altDescript} />
            </a>
          </div>
          <div className="article-item__content">
            {
              classFormAround === 'popular-news__list--card' ?       <div>
              <ul className="article-item__stats">
                <li>
                  <i className="icons ion-ios-eye" />
                  <span className="text">Views</span>
                </li>
              </ul>
              <ul className="article-item__categories">
                <li><a href="#" className="btn btn-category">News</a></li>
                <li><a href="#" className="btn btn-category">News</a></li>
              </ul>
            </div>
            
            : null
            
            }
            <h2 className="article-item__title">
              <a href="/post-detail.html">{titleNew}</a>
            </h2>
            {
                classFormAround === 'popular-news__list--card' ?       <p className="article-item__desc">{textDiscriptTitle}</p> : null
            }
        
            <div className="article-item__info">
              {
                 classFormAround ==='tcl-col-12 tcl-col-md-6'  ? null :<div className="article-item__author-image">
                 <a aria-label="John Doe" href="#">
                   <img src={imgAvata} alt="john-doe" />
                 </a>
               </div>
              }
            
              <div className="article-item__info-right">
                <div className="article-item__author-name">
                  <a href="#"><strong>{nameAuthor}</strong></a>
                </div>
                <div className="article-item__datetime">
                  <div className="date">{dateTimePost}</div>
                  <div className="time-for">
                    {
                      dateTimePost && <span className="ml-6x"><Clock /> {timePost}</span>
                    }

                  </div>
                </div>
              </div>
            </div>

          </div>
        </article>
      </div>

    </>
  )
}