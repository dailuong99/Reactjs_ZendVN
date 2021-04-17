import { PostsService } from '../../services/posts';
import { ACT_FETCH_LATEST_POSTS } from './reducer';


export function actFetchLatestPost() {

    let posts = PostsService.getList({
        page: 1,
        per_page: 3
    })
    console.log("posts", posts)
    return {
        type: ACT_FETCH_LATEST_POSTS,
        payload: posts
    }
}
// export function actFetchLatestPostAsync() {
//     return function(dispatch) {
//         type: ACT_FETCH_LATEST_POSTS

//         //...
//             PostsService.getList({
//             page: 1,
//             per_page: 3,
//         })

//         //...
//             dispatch(actFetchLatestPostAsync({
//             page: 1,
//             per_page
//         }))
//         dispatch(actFetchLatestPostAsync({
//             page: 1,
//             per_page
//         }))

//     }
// }