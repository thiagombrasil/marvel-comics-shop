import { createStore } from 'redux';
import storeSynchronize from 'redux-localstore';

import reducers from './reducers';

const store = createStore(reducers);

export default store;

storeSynchronize(store);