import { api } from "./api"

// export default {
//   postLast: () => {
//       return  fetch('http://learning-reactjs.xyz:9999/wp-api/wp-json/wp/v2/posts?per_page=3&page=1')
//       .then(res => res.json())
//   }

// }
export const PostsService = {
    getList: function () {
        return api
        .call()
            .get('/wp/v2/posts?per_page=3&page=1')
    }
}




