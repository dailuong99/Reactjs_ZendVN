import React from 'react';
import './Button.css';
import Loading from './Loading';


export default function Button({
type='button',
name='',
classCustom='',
isLoading='false',
linkHref="#",
subOrRef="false",
nameHref=''
}){
    return(
     <>
            { subOrRef === "true" ? <a href={linkHref}>{nameHref}</a> :  
               <button className={classCustom} type={type}>
            { isLoading === 'true'  ? <Loading /> : null } {name}
            </button> }
     </> 
    )
}