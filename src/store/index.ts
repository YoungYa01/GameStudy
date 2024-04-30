import {configureStore} from "@reduxjs/toolkit";

import tokenReducer from './modules/public/index.ts'
import userReducer from './modules/user/index.ts'

const store = configureStore({
  reducer: {
    tokenReducer: tokenReducer,
    userReducer: userReducer,
  }
})

export default store;
