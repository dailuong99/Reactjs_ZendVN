import ArticleItem from '../ArticleItem';
import Button from '../shared/button';
import Col from '../shared/Col';
import Container from '../shared/Container';
// import MainTitle from '../MainTitle';
import Row from '../shared/Row';

export default function ArticlesList() {
  return (
    <div className="articles-list section">
      <Container>
        {/* <MainTitle>Danh sách bài viết</MainTitle> */}

        {/* End Row News List */}
        <Row>
          <Col md={6}>
            <ArticleItem isStyleCard isShowAvatar={false} />
          </Col>
          <Col md={6}>
            <ArticleItem isStyleCard isShowAvatar={false} />
          </Col>
          <Col md={6}>
            <ArticleItem isStyleCard isShowAvatar={false} />
          </Col>
          <Col md={6}>
            <ArticleItem isStyleCard isShowAvatar={false} />
          </Col>
          <Col md={6}>
            <ArticleItem isStyleCard isShowAvatar={false} />
          </Col>
          <Col md={6}>
            <ArticleItem isStyleCard isShowAvatar={false} />
          </Col>
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