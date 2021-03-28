import React from 'react';
import './Button.css';
import Loading from './Loading';


export default function Button({
type='button',
name='',
classCustom='',
isLoading='false',
linkhref="#",
SuborRef="false",
namehref=''
}){
    return(
     <div>
            { SuborRef === "true" ? <a href={linkhref}>{namehref}</a> :  
               <button className={classCustom} type={type}>
            { isLoading === 'true'  ? <Loading /> : null } {name}
            </button> }
     </div> 
    )
}