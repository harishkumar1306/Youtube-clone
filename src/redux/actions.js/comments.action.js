import request from '../../api.js';
import { COMMENTS_LIST_FAIL, COMMENTS_LIST_REQUEST, COMMENTS_LIST_SUCCESS, CREATE_COMMMENT_FAIL, CREATE_COMMMENT_SUCCESS } from '../actionTypes.js';

export const getCommentsOfVideoById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: COMMENTS_LIST_REQUEST,
        })

        const { data } = await request('/commentThreads', {
            params: {
                part: 'snippet',
                videoId: id,
            },
        })
        dispatch({
            type: COMMENTS_LIST_SUCCESS,
            payload: data.items,
        })
    } catch (error) {
        console.log(error.response.data)
        dispatch({
            type: COMMENTS_LIST_FAIL,
            payload: error.response.data,
        })
    }
}

export const addComment = (id, text) => async (dispatch, getState) => {
    try {
        
        const obj = {
            snippet:{
                videoId: id,
                topLevelComment:{
                    snippet:{
                        textOriginal: text
                    }
                }
            }
        }

        await request.post('/commentThreads',obj, {
            params: {
                part: 'snippet'
            },
            headers:{
                Authorization: `Bearer ${getState().auth.accessToken}`,
            },
        })
        dispatch({
            type: CREATE_COMMMENT_SUCCESS,
        })

    setTimeout(() => dispatch(getCommentsOfVideoById(id)), 4000)

    } catch (error) {
        console.log(error.response.data)
        dispatch({
            type: CREATE_COMMMENT_FAIL,
            payload: error.response.data,
        })
    }
}