import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { broswerHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

//default data
import comments from './data/comments';
import comments from './data/posts';

//create an object for the default data
const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(broswerHistory, store);

export default store;