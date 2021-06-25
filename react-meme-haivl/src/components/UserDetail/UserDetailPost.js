import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constants/path';

export default function UserDetailPost({ userPosts }) {

  return (
    <div className="ass1-section__wrap row ass1-section__isotope-init">
      {/*section*/}
      {
        userPosts && userPosts.map(post =>
          <div className="ass1-section__item col-lg-6" key={post?.PID}>
            <div className="ass1-section">
              <div className="ass1-section__head">
                <a href="single_post.html" className="ass1-section__avatar ass1-avatar">
                  <img src={post?.profilepicture} alt="" />
                </a>
                <div>
                  <a href="#" className="ass1-section__name">{post?.fullname}</a>
                  <span className="ass1-section__passed">{post?.time_added}</span>
                </div>
              </div>
              <div className="ass1-section__content">
                <p>{post?.post_content}</p>
                <div className="ass1-section__image">
                  <Link to={PATHS.USER_DETAIL}><img src={post?.url_image} alt="" /></Link>
                </div>
              </div>
              <div className="ass1-section__footer">
                <a href="#" className="ass1-section__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></a>
                <a href="#" className="ass1-section__btn-downvote ass1-btn-icon"><i className="icon-Downvote" /></a>
                <a href="#" className="ass1-section__btn-like ass1-btn-icon"><i className="icon-Favorite_Full" /><span>1,274</span></a>
                <a href="#" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
              </div>
            </div>
          </div>
        )
      }
    </div>

  )
}