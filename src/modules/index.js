import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import root from './root';
import home from './home';
import generation from './generation';

const reducer = combineReducers({
  root,
  home,
  generation,
  forms: formReducer,
});

export default reducer;
