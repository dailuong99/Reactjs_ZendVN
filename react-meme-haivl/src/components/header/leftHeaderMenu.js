import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { actFetchCategoriesAsync } from "../../store/categories/actions";

export default function LeftHeadMenu() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actFetchCategoriesAsync());
    }, [])

    const categories = useSelector(state => state.Categories.categoriesLists)

    const [hideCategories, showCategories] = useState(false);
    function toggleCategories() {
        showCategories(wasOpened => !wasOpened);
    }

    return (
        <>
            <nav>
                <ul className="ass1-header__menu">
                    <li>
                        <a href="#" onClick={toggleCategories} >Danh mục</a>
                        {hideCategories && (
                            <div className="ass1-header__nav" >
                                <div className="container">
                                    {/* <ul>
                                            {
                                             categories.slice(0,5).map(categori => {
                                                    return (
                                                        <li key={categori.id}><a href="index.html" categori={categori}>{categori.text}</a></li>
                                                    )
                                                })
                                            }
                                        </ul> */}
                                    <ul>
                                        {
                                            categories.map(categori => {
                                                return (
                                                    <li key={categori.id}><a href="index.html" categori={categori}>{categori.text}</a></li>
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

