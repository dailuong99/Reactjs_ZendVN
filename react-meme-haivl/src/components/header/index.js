
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actFetchPostsAsync } from './../../store/posts/actions';
import LeftHeadMenu from './leftHeaderMenu';
import RightHeaderMenu from './rightHeaderMenu';
import { Link } from 'react-router-dom';
import SearchHeaderMenu from './searchHeaderMenu';



export default function Header() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actFetchPostsAsync());
    }, [])

    return (
        <>
            <div className="ass1-header">
                <div className="container">
                    <Link to="/" className="ass1-logo">
                        TCL Meme - LTD TODO(spam)
                    </Link>
                    <LeftHeadMenu></LeftHeadMenu>
                    <div className="ass1-header__search">
                        <SearchHeaderMenu></SearchHeaderMenu>
                    </div>
                    <RightHeaderMenu></RightHeaderMenu>
                </div>
            </div>
        </>
    )
}

