import React from 'react';
import defauAvata from '../assets/images/defaultavata.png';
import userUserId from '../../helpers/hooks/useUserId';
import { PATHS } from '../../constants/path';
import {Link} from "react-router-dom";


export default function UserDetailInfo({ user, countPost }) {
  const currUserid = userUserId()
  return (
    <div className="container">
      <div className="ass1-head-user">
        <div className="ass1-head-user__content">
          <div className="ass1-head-user__image">
            <img src={user?.profilepicture || defauAvata} alt="" />
          </div>
          <div className="ass1-head-user__info">
            <div className="ass1-head-user__info-head">
              <div className="ass1-head-user__name">
                <span>{user?.fullname}</span>
                <i><img src="fonts/emotion/svg/Verified.svg" alt="" /></i>
              </div>
              <div className="w-100" />
              {
                currUserid !== user?.USERID ? <Link to="#" className="ass1-head-user__btn-follow ass1-btn">Theo dõi</Link>
                  :
                  <>
                    <Link to={PATHS.CHANGE_PASSWORD} className="ass1-head-user__btn-follow ass1-btn">Đổi mật khẩu</Link>
                    <Link to={PATHS.USER_PROFILE} className="ass1-head-user__btn-follow ass1-btn">Profile</Link>
                  </>
              }

              {/* <a href="#" class="ass1-head-user__btn-options ass1-btn-icon"><i class="icon-Options"></i></a> */}
            </div>
            <div className="ass1-head-user__info-statistic">
              <div className="ass1-btn-icon"><i className="icon-Post" /><span>Bài viết: {countPost}</span></div>
              <div className="ass1-btn-icon"><i className="icon-Followers" /><span>Theo dõi: {user?.yourviewed}</span></div>
              <div className="ass1-btn-icon"><i className="icon-Following" /><span>Đang theo dõi: {user?.youviewed}</span></div>
              {/* <div class="ass1-btn-icon"><i class="icon-Upvote"></i><span>Up Vote: 999999</span></div> */}
            </div>
            <p>{user?.description}</p>
          </div>
        </div>
      </div>
    </div>

  )
}