import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import home from './home';
import root from './root';

const reducer = combineReducers({
  home,
  root,
  forms: formReducer,
});

export default reducer;
