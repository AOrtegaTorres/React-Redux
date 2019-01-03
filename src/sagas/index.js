import { put, call, takeLatest,fork } from 'redux-saga/effects';
import  request  from '../api';

import {
  GET_POKEMON_GENERATIONS,
  setPokemonGenerations
 } from '../modules/home';

import {
  GET_POKEMON_GENERATION,
  setPokemonGeneration
} from '../modules/generation';

import { setLoadingTrue, setLoadingFalse } from '../modules/root';

const endPoint = 'http://pokeapi.salestock.net/api/v2';

// Function to request generation to Home, one per one
function* requestPokemonGenerations(data){
  const { generation } = data
  yield put(setLoadingTrue())
  for (let i = generation[0]; i <= generation[1]; i++) {
    const apiResponse = yield call(request,`${endPoint}/generation/${i}`)
    yield put(setPokemonGenerations(apiResponse))
  }
  yield put(setLoadingFalse())
}

//  Function to get data just one generation
function* getPokemonByGeneration({generation}){
  yield put(setLoadingTrue());
  const apiResponse = yield call(request,`${endPoint}/generation/${generation}`);
  yield put(setPokemonGeneration(apiResponse));
  yield put(setLoadingFalse());
}

export default function* rootSaga(){
  yield [
    takeLatest(GET_POKEMON_GENERATIONS,requestPokemonGenerations),
    takeLatest(GET_POKEMON_GENERATION, getPokemonByGeneration),
  ]
}
