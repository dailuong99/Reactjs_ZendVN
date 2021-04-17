import ArticleItem from '../ArticleItem';
import Button from '../shared/Button';
import Col from '../shared/Col';
import Container from '../shared/Container';
import MainTitle from '../shared/MainTitle';
import Row from '../shared/Row';

export default function ArticlesList() {
  return (
    <div className="articles-list section">
      <Container>
        <MainTitle isShowBtn btnProps={{ btnText: 'Xem thêm' }}>
          Tin tổng hợp
        </MainTitle>

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