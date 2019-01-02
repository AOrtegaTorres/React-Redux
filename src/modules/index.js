import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import home from './home';

const reducer = combineReducers({
  home,
  forms: formReducer,
});

export default reducer;
