import { combineReducers } from "redux";
//여러 state있어서 reducer나눠져 있음
// combineReducer에서 rootreducer로 하나로 합쳐줌

import user from "./user_reducer";
import authBoard from "./authBoard_reducer";
import cartReducer from "./cartReducer";
// import productShop from

const rootReducer = combineReducers({
  user,
  authBoard,

  cartReducer,
});

export default rootReducer;
