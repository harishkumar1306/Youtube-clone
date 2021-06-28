import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './reducers.js/auth.reducer';
import { homeVideosReducers } from './reducers.js/videos.reducers';
import { selectedVideoReducers, relatedVideoReducers, searchedVideosReducers } from './reducers.js/videos.reducers';
import { channelDetailsReducer } from './reducers.js/channels.reducers';
import { commentsListReducer } from './reducers.js/comments.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducers,
    selectedVideo: selectedVideoReducers,
    channelDetails: channelDetailsReducer,
    commentsList : commentsListReducer,
    relatedVideo: relatedVideoReducers,
    searchedVideo : searchedVideosReducers,
})

const store = createStore(rootReducer, {},composeWithDevTools(applyMiddleware(thunk)));

export default store;