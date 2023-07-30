import { faL } from "@fortawesome/free-solid-svg-icons";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Await } from "react-router-dom";

// post
export const reguser = createAsyncThunk("reguser", async (data) => {
  const response = await axios
    .post("https://64b66228df0839c97e15752d.mockapi.io/user_details", data)
    .then(response.data);
});
// get
export const getuser = createAsyncThunk("getuser", async () => {
  const response = await axios.get(
    "https://64b66228df0839c97e15752d.mockapi.io/user_details"
  );
  return await response.data;
});

// get single user

// export const getviewFull = createAsyncThunk(
//   "getviewFulldetails",
//   async (id) => {
//     const response = await axios.get(
//       `https://64b66228df0839c97e15752d.mockapi.io/user_details/${id}`
//     );
//     return await response.data;
//   }
// );

// delete single user

export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  const response = await axios.delete(
    `https://64b66228df0839c97e15752d.mockapi.io/user_details/${id}`
  );
  const result = await response.data;
  return result;
  // getuser()
  // console.log('api',result);
});

export const updateUser=createAsyncThunk("Update",async(user)=>{
  const response=await axios.put(`https://64b66228df0839c97e15752d.mockapi.io/user_details/${user.id}`,user)
  const result=response.data
  // console.log(result);
  return result
})

const UserSlice = createSlice({
  name: "users",
  initialState: {
    userList: [],
    loading: false,
    error: null,
  searchBox:[]
  },
  reducers: {
searchData:(state,action)=>{
  console.log(action.payload);
  state.searchBox=action.payload


}
  },
  extraReducers: {
    [reguser.loading]: (state) => {
      state.loading = true;
    },
    [reguser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userList.push(action.payload);
    },
    [reguser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getuser.loading]: (state, action) => {
      state.loading = true;
    },
    [getuser.fulfilled]: (state, action) => {
      state.loading = false;
  
      state.userList = action.payload;
    },
    [getuser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteUser.loading]: (state, action) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      let {id}=action.payload
      {id && (state.userList = state.userList.filter(
        (item) => item.id !== action.payload.id
      ))}
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateUser.pending]:(state,action)=>{
      state.loading=true

    },
    [updateUser.fulfilled]:(state,action)=>{
      state.pending=false
      console.log(action.payload);
      // state.userList=action.payload
    },
    [updateUser.rejected]:(state,action)=>{
      state.pending=false
      state.error=action.payload
    }

    // ,
    // [getviewFull.loading]: (state, action) => {
    //   state.loading = true;
    // },
    // [getviewFull.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.viewUser.push(action.payload)
    // },
    // [getviewFull.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // },
  },
});
export const { searchData } = UserSlice.actions;
export default UserSlice.reducer;
