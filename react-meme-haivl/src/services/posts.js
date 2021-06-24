import { api } from './apilogin';

 const PostService = {
    getList({
        currPage , pagesize 
    } ) {
        return api
        .call()
        .get(`/post/getListPagination.php?pagesize=${pagesize}&currPage=${currPage}`);
    },
    getSearch({ query }) {
        return api
        .call()
        .get(`/post/search.php?query=${query}`)
    },

}
export default PostService;