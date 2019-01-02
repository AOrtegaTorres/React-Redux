export const GET_POKEMON_GENERATIONS = 'pokemon/Home/GET_POKEMON_GENERATIONS';
export const SET_POKEMON_GENERATIONS = 'pokemon/home/SET_POKEMON_GENERATIONS';

const initialState = {
  generations:[1,6],
  generationsData: []
}

export default function reducer(state = initialState,action){
  switch (action.type) {
    case GET_POKEMON_GENERATIONS:
      return state;
    case SET_POKEMON_GENERATIONS:
      state.generationsData.push(action.generationData)
      return {...state}
    default:
      return state;
  }
}

export function getPokemonGenerations(generation){
  return{
    type:GET_POKEMON_GENERATIONS,
    generation,
  }
}

export function setPokemonGenerations(generationData){
  return {
    type: SET_POKEMON_GENERATIONS,
    generationData
  }
}
