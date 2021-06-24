import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../shared/Input';
import {PATHS} from "../../constants/path";
export default function SearchHeaderMenu() {
    const history = useHistory();
    const [searchStr, setSearchStr] = useState('');

    function handleSubmitSearch(evt) {
        evt.preventDefault();

        if (searchStr.trim()) {
            history.push(`${PATHS.SEARCH_RESULT}?query=${searchStr}`);
        }
    }

    function handleChange(evt) {
        setSearchStr(evt.target.value);
    }


    return (
        <>
            <div className="ass1-header__search">
                <form onSubmit={handleSubmitSearch}>
                    <label>
                        <Input placeholder="Nhập từ khoá tìm kiếm"
                            type="search"
                            className="form-control"
                            value={searchStr}
                            onChange={handleChange} />
                    </label>
                </form>
            </div>
        </>
    )
}

