import './Input.css';
import { useEffect, useState } from 'react';
import classNames from 'classnames';



export default function Input({
    type = 'text',
    placeholder,
    labelText,
    onChange,
    className,
    value: propValue = ''
}) {
    // state
    const [value, setValue] = useState('');
    const [localType, setLocalType] = useState(type);

    useEffect(() => {
        setValue(propValue);
    }, [propValue])

    function _onChange(evt) {
        setValue(evt.target.value);

        if (typeof onChange === 'function') {
            onChange(evt);
        }
    }

    function onToggleShowPassword() {
        if (localType === 'password') {
            setLocalType('text');
        } else {
            setLocalType('password')
        }
    }


    const classesInput = classNames(className, {})

    return (
        <> {
            labelText ? <label> {labelText} </label> : null
        } {
                type === 'password' ?
                    <i
                        onClick={onToggleShowPassword}
                        className={
                            localType === 'password' ?
                                'toggle-password ion-eye' :
                                'toggle-password ion-eye-disabled'
                        }
                    /> : null
            }
           
             <input type={localType}
                placeholder={placeholder}
                onChange={_onChange}
                value={value}
                className={classesInput}
            />
             {
                 type === 'search' ?
                 <i className='icon-Search' /> : null 
            }
        </>
    )
}

// Truthy - Falsy
// Falsy: undefined - null - '' - 0 - false - NaN
// Không phải Falsy sẽ là Truthy