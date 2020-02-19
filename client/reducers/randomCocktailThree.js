import { SET_RANDOMTHREE } from "../actions";
const initialState = {
  drinks: [{
    strDrink:""
}] };
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOMTHREE :
      return action.random;
    default:
      return state;
  }
};
export default Reducer;
