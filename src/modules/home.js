export const GET_POKEMON_GENERATIONS = 'pokemon/Home/GET_POKEMON_GENERATIONS';
export const SET_POKEMON_GENERATIONS = 'pokemon/Home/SET_POKEMON_GENERATIONS';
export const SET_GENERATION_SELECTED = 'pokemon/Home/SET_GENERATION_SELECTED';

const initialState = {
  generations:[1,6],
  generationsData: [],
  generationSelected:{}
}

export default function reducer(state = initialState,action){
  switch (action.type) {
    case GET_POKEMON_GENERATIONS:
      return state;
    case SET_POKEMON_GENERATIONS:
      state.generationsData.push(action.generationData)
      return {...state}
    case SET_GENERATION_SELECTED:
      state.generationSelected = action.generation
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

export function setGenerationSelected(generation){
  return {
    type:SET_GENERATION_SELECTED,
    generation
  }
}
