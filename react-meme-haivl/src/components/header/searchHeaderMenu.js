import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../shared/Input';

export default function SearchHeaderMenu() {
    const history = useHistory();
    const [searchStr, setSearchStr] = useState('');



    function handleSubmit(evt) {
        evt.preventDefault();
    
        if (searchStr.trim()) {
          history.push('/search?query=' + searchStr);
        }
      }

    function handleChange(evt) {
        setSearchStr(evt.target.value);
      }


    return (
        <>
            <div className="ass1-header__search">
                <form  onSubmit={handleSubmit}>
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

