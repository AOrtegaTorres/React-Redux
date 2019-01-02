import { put, call, takeLatest,fork } from 'redux-saga/effects';
import { GET_POKEMON_GENERATIONS } from '../modules/home';

function* requestPokemonGenerations(){

}

export default function* rootSaga(){
  yield [
    takeLatest(GET_POKEMON_GENERATIONS,requestPokemonGenerations),
    fork(requestPokemonGenerations)
  ]
}
