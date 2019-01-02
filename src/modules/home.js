export const GET_POKEMON_GENERATIONS = 'pokemon/Home/GET_POKEMON_GENERATIONS';
export const SET_POKEMON_GENERATIONS = 'pokemon/home/SET_POKEMON_GENERATIONS';

const initialState = {
  generations:[1,7],
  generationsData: []
}

export default function reducer(state = initialState,action){
  switch (action.type) {
    case GET_POKEMON_GENERATIONS:
      return state;
    case SET_POKEMON_GENERATIONS:
      state.pokemon = action.pokemon
      return {...state}
    default:
      return state;
  }
}

export function getPokemonGenerations(){
  return{
    type:GET_POKEMON_GENERATIONS
  }
}

export function setPokemonGenerations(pokemon){
  return {
    type: SET_POKEMON_GENERATIONS,
    pokemon
  }
}
