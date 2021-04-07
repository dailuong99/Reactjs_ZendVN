import Input from "./components/shared/Input";
import { useState } from 'react';
import Button from "./components/shared/button";
import ArticlesLatest from "./components/ArticlesLatest";
import ArticlesPopular from "./components/ArticlesPopular";
import Row from "./components/shared/Row";
import Col from "./components/shared/Col";
import ArticlesList from "./components/ArticlesList";



import './assets/css/article-item.css';
import './assets/css/bootstrap-tcl.css';
import './assets/css/bundle.css';
import './assets/css/button.css';
import './assets/css/comments.css';
import './assets/css/latest-news-list.css';
import './assets/css/main-title.css';
import './assets/css/main.css';
import './assets/css/popular-news-list.css';
import './assets/css/post-author.css';
import './assets/css/post-detail.css';
import './assets/css/related-posts.css';



export default function HomePage() {

  return (
    <div>
      <div className="tcl-container">
          <Row>
            <Col xs={12}>
              <ArticlesLatest />
            </Col>

            <Col xs={12}>
              <ArticlesPopular />
            </Col>

            <Col xs={12}>
              <ArticlesList />
            </Col>
          </Row>

        </div>
    </div>
  )
}