import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducers as files } from './store/modules/files';

const rootReducer = combineReducers({
  routing,
  files
});

export default rootReducer;