
import LeftHeadMenu from './leftHeaderMenu';
import RightHeaderMenu from './rightHeaderMenu';
import { Link } from 'react-router-dom';
import SearchHeaderMenu from './searchHeaderMenu';



export default function Header() {


    return (
        <>
            <div className="ass1-header">
                <div className="container">
                    <Link to='/' className="ass1-logo">
                        TCL Meme - LTD TODO(spam)
                    </Link>
                    {/* left  header */}
                    <LeftHeadMenu></LeftHeadMenu>
                    {/* search header */}
                    <SearchHeaderMenu></SearchHeaderMenu>
                    {/* right header */}
                    <RightHeaderMenu></RightHeaderMenu>
                </div>
            </div>
        </>
    )
}

