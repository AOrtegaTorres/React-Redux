import { put, call, takeLatest,fork } from 'redux-saga/effects';

function* requestFirstPokemon(){

}

export default function* rootSaga(){
  yield [
    fork(requestFirstPokemon)
  ]
}
