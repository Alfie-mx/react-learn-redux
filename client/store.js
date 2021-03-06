import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'


// import the root reducer
import rootReducer from './reducers/index'


// import fake data
import posts from './data/posts'
import comments from './data/comments'


// create an object for the default data
const defaultState = {
    posts,
    comments
};

const composeEnhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

const store = createStore(rootReducer, defaultState, composeEnhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// To Hot Reload Reducers
if( module.hot ){
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}


export default store