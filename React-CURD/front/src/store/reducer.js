import { combineReducers } from 'redux';
import homeReducer from '../components/pages/home/modules/HomeReducer';

/* 各Reducerを登録 */
const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;