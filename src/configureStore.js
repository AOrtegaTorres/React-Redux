import { createStore, applyMiddleware ,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './modules';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(){

  const composeEnhancers =
    typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga);

  return store;
}
