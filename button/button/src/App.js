import Input from "./components/shared/Input/Input";
import Button from "./components/shared/button/Button";
import './components/shared/button/Button.css';

import ContructionList from "./components/shared/listNew/ContructionList.js";

import '../src/assets/css/article-item.css';
import '../src/assets/css/bootstrap-tcl.css';
import '../src/assets/css/bundle.css';
import '../src/assets/css/button.css';
import '../src/assets/css/comments.css';
import '../src/assets/css/latest-news-list.css';
import '../src/assets/css/main-title.css';
import '../src/assets/css/main.css';
import '../src/assets/css/popular-news-list.css';
import '../src/assets/css/post-author.css';
import '../src/assets/css/post-detail.css';
import '../src/assets/css/related-posts.css';

import { useState } from 'react';

const objStyle = {
  padding: '50px 0'
}

function App() {
  const [userName, setUserName] = useState('congluc1902');

  return (
    <>
      <div className="tcl-container">
        <div className="tcl-justify-content-center">
          {/* <div className="tcl-col-4" style="padding: 50px 0;"> */}
          <div className="tcl-col-4" style={objStyle}>
            <Input
              type="password"
              placeholder="Nhập password"
            />
            <Input
              labelText="Username"
              type="text"
              placeholder="Nhập username"
              value={userName}
              onChange={(evt) => {
                setUserName(evt.target.value);
              }}
            />
            <Input
              labelText="Fullname"
              onChange={(evt) => {
                console.log('value Input', evt.target.value)
              }}
            />

            <Button type='button' classCustom='btn btn-primary btn-size-large' name='Submit' />
            <Button type='submit' classCustom="btn btn-default" name='View More' />
            <Button type='button' classCustom="btn btn-primary btn-size-large d-flex" name='Load More' isLoading='true' />
            <Button nameHref='countinue' subOrRef='true' />

          </div>
        </div>
      </div>

      <ContructionList mainTitle="Latest Articles" />
      <ContructionList  mainTitle="Popular Articles"/>
      <ContructionList  mainTitle="News List" />
    </>
  )
}

export default App;