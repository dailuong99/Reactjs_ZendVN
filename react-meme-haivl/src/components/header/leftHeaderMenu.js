import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { PATHS } from "../../constants/path";
import { actFetchCategoriesAsync } from "../../store/categories/actions";
import { Link, useLocation } from "react-router-dom";

export default function LeftHeadMenu() {
    const dispatch = useDispatch();
    const location = useLocation();

    const categories = useSelector(state => state.Categories.categoriesLists)

    const [hideCategories, showCategories] = useState(false);

    function toggleCategories(e) {
        e.preventDefault()
        showCategories(!hideCategories);
    }

    useEffect(() => {
        showCategories(false);
    }, [location])

    useEffect(() => { 
        dispatch(actFetchCategoriesAsync());
    }, [])


  

    return (
        <>
            <nav>
                <ul className="ass1-header__menu">
                    <li>
                        <a href="/" onClick={toggleCategories} >Danh mục</a>
                        {hideCategories && (
                            <div className="ass1-header__nav" >
                                <div className="container">
                                    <ul>
                                        {
                                            categories.map(categori => {
                                                const url = PATHS.POST_LIST_CATEGORIES.replace(':category_id', categori.id)
                                                return (
                                                    <li key={categori.id}><Link to={url} >{categori.text}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>


                                </div>
                                <div className="ass1-header__menu-transition" />
                            </div>

                        )}
                    </li>
                </ul>
            </nav>
        </>
    )
}

