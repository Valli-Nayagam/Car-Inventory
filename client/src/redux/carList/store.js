import { createStore } from 'redux'
import carReducer from './carReducer';

const store = createStore(carReducer);

export default store