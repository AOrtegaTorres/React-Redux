const GET_FIRST_POKEMON = 'pokemon/Home/GET_FIRST_POKEMON';
const SET_FIRST_POKEMON = 'pokemon/Home/SET_FIRST_POKEMON';

const initialState = {
  page:1,
  perPage:10,
  pokemon:[]
}

export default function reducer(state = initialState,action){
  switch (action.type) {
    case GET_FIRST_POKEMON:
      return state;
    default:
      return state;
  }
}
