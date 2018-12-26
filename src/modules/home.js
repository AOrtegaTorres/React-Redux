const GET_FIRST_POKEMON = 'pokemon/Home/GET_FIRST_POKEMON';
const SET_POKEMON = 'pokemon/home/SET_POKEMON';

const initialState = {
  pokemonId:1,
  pokemon:[]
}

export default function reducer(state = initialState,action){
  switch (action.type) {
    case GET_FIRST_POKEMON:
      return state;
    case SET_POKEMON:
      state.pokemon = action.pokemon
      return {...state}
    default:
      return state;
  }
}

export function getFirstPokemon(){
  return{
    type:GET_FIRST_POKEMON
  }
}

export function setPokemon(pokemon){
  return {
    type: SET_POKEMON,
    pokemon
  }
}
