export const SET_LOADING_TRUE = 'pokemon/root/SET_LOADING_TRUE';
export const SET_LOADING_FALSE = 'pokemon/root/SET_LOADING_FALSE';

const initialState = {
  loading:false,
}

export default function reducer(state = initialState, action ){
  switch (action.type) {
    case SET_LOADING_TRUE:
      state.loading  = true;
      return {...state}
    case SET_LOADING_FALSE:
      state.loading  = false;
      return {...state}
    default:
      return state;
  }
}

export function setLoadingTrue(){
  return{
    type: SET_LOADING_TRUE
  }
}

export function setLoadingFalse(){
  return{
    type: SET_LOADING_FALSE
  }
}
