import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../shared/Input';


export default function SearchHeaderMenu() {
    const history = useHistory();
    const [searchStr, setSearchStr] = useState('');
    return (
        <>
            <form action="#">
                {/* <label>
                    <input type="search" name="search-text" className="form-control" placeholder="Nhập từ khóa ..." />
                    <i className=" fa-search" />
                </label> onChange={handleChange}*/}
                        <Input placeholder="Nhập từ khoá tìm kiếm" type="search" value={searchStr}  />

            </form>
        </>
    )
}

