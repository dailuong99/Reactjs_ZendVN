import ArticleItem from '../ArticleItem';
import Button from '../shared/Button';
import Col from '../shared/Col';
import Container from '../shared/Container';
import MainTitle from '../shared/MainTitle';
import Row from '../shared/Row';
import { useSelector } from 'react-redux';
import React from 'react';


export default function ArticlesList() {
  const posts = useSelector(state => state.Posts.articlesList)
  return (
    <div className="articles-list section">
      <Container>
        <MainTitle isShowBtn btnProps={{ btnText: 'Xem thêm' }}>
          Tin tổng hợp
        </MainTitle>

        <Row>
          {posts.map((post, i) => <Col key={i} md={6}>
              <ArticleItem isStyleCard isShowAvatar={false} post={post} />
            </Col>
          )}


        </Row>
        {/* End Row News List */}
        {/* Btn Loadmore */}
        <div className="text-center">
          <Button size="large" variant="primary" loading >Tải thêm</Button>
        </div>
      </Container>
    </div>
  )
}