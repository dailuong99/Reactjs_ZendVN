import { api } from './api';

export const CommentsService = {
    getList({
        postid = 28,
        ...restParams // { search: '' }
    } = {}) {
        return api.call().get('/comment/comments.php', {
            params: {
                postid,
                ...restParams
            }
        })
    }
}