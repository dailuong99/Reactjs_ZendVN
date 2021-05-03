import { api } from './api';

export const PostService = {
    getList({
        currPage = 1,
        pagesize = 3,
        ...restParams // { search: '' }
    } = {}) {
        return api.call().get('/post/getListPagination.php?', {
            params: {
                currPage,
                pagesize,
                ...restParams
            }
        })
    }
}