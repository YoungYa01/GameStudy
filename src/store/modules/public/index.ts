import {createSlice} from "@reduxjs/toolkit";

const tokenStore = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    setToken(_, action) {
      return action.payload
    }
  }
})

const {setToken} = tokenStore.actions;

const reducer = tokenStore.reducer;

export {
  setToken
}

export default reducer;
