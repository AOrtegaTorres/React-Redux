import { put, call, takeLatest,fork } from 'redux-saga/effects';

function* testing(){
  console.log('ejecutando saga');
}

export default function* rootSaga(){
  yield [
    fork(testing)
  ]
}
