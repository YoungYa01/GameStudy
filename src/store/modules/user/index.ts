import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'username',
  initialState:'',
  reducers: {
    setUsername(_, action) {
      console.log('提交action', action)
      return action.payload
    }
  }
})

const {setUsername} = userSlice.actions;

const reducer = userSlice.reducer;

export {
  setUsername
}

export default reducer;
