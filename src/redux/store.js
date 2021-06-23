import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './reducers.js/auth.reducer';
import { homeVideosReducers } from './reducers.js/videos.reducers';



const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducers,
})


const store = createStore(rootReducer, {},composeWithDevTools(applyMiddleware(thunk)));

export default store;