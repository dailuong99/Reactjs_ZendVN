
// Hooks
// Custom Hooks
// Có thể sử dụng những Hooks của React ở trong đây
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import Button from '../shared/Button';
import { actFetchPostsAsync } from '../../store/posts/actions';


export function usePostsPaging({
  actionAsync = actFetchPostsAsync,
  extraParams = {}
} = {}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const articlesPaging = useSelector(state => state.Posts.articlesPaging)
  const posts = articlesPaging.postList;
  const page = articlesPaging.page;
  const totalPages = articlesPaging.totalPages;
  const totalElements = articlesPaging.total;
  const hasMoreItems = page < totalPages;

  function handleLoadMore() {
    if (loading) {
      return;
    }

    setLoading(true);
    dispatch(
      actionAsync({
        page: page + 1,
        ...extraParams
      })
    ).finally(() => {
      setLoading(false);
    })
  }

  function renderButtonLoadmore() {
    if (!hasMoreItems) {
      return null;
    }

    return (
      <div className="text-center">
        <Button 
          size="large" 
          variant="primary"
          loading={loading}
          disabled={loading}
          onClick={handleLoadMore}
        >Tải thêm</Button>
      </div>
    )
  }

  return {
    posts,
    totalElements,
    renderButtonLoadmore
  }
}