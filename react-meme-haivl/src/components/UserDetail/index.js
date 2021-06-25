import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncGetUserDetail } from '../../store/users/actions';
import UserDetailInfo from './UserDetailInfo';
import UserDetailPost from './UserDetailPost';

export default function UserDetail() {
    const userid = useParams().user_id;
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [userPosts, setuserPost] = useState(null);

    useEffect(() => {

        dispatch(asyncGetUserDetail({ userid }))
            .then((res) => {
                if (res.ok) {
                    setUser(res.user);
                    setuserPost(res.userPosts);

                }else{
                    console.log(res.error)
                }
            })
    }, [userid])

    return (
        <main>
            <div className="container">
                <UserDetailInfo user={user} countPost={userPosts?.length}></UserDetailInfo>
                {/*sections*/}
                <UserDetailPost userPosts={userPosts}></UserDetailPost>
            </div>
        </main>
    )
}