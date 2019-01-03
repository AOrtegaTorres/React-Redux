export const GET_POKEMON_GENERATION = 'pokemon/Generation/GET_POKEMON_GENERATION';
export const SET_POKEMON_GENERATION = 'pokemon/Generation/SET_POKEMON_GENERATION';

const initialState = {
  generationData:{}
}

export default function reducer(state = initialState,action){
  switch (action.type) {
    case GET_POKEMON_GENERATION:
      return state;
    case SET_POKEMON_GENERATION:
      state.generationData = action.generationData
      return {...state}
    default:
      return state;
  }
}

export function getPokemonGeneration(generation){
  return{
    type:GET_POKEMON_GENERATION,
    generation,
  }
}

export function setPokemonGeneration(generationData){
  return {
    type: SET_POKEMON_GENERATION,
    generationData
  }
}
