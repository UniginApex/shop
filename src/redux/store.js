import { createStore } from 'redux';
import plantReducer from './reducers';

// Create the store with our reducer
const store = createStore(plantReducer);

export default store;