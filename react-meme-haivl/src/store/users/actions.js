import { CommentsService } from "../../services/comments";


export const ACT_FETCH_COMMENTS = 'ACT_FETCH_COMMENTS';
/**
 * ACTION CREATORS
 */

export function actFetchComments({
    comments = [],
}) {
    return {
        type: ACT_FETCH_COMMENTS,
        payload: {
            comments,
        }
    }
}


/**
 * ACTION ASYNC
 */

export const actFetchCommentsAsync = ({
    postid = 28,
    ...restParams
} = {}) => {
    return async dispatch => {
        try {
            const response = await CommentsService.getList({
                postid,
                ...restParams
            });

            const comments = response.data;

            console.log(comments)
            
            dispatch(actFetchComments({
                comments
            }))
            
            console.log(comments)
        } catch (e) {

        }
    }
}

