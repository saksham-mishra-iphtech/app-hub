import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users:[],
    currentUser:null,
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    signup:(state,action)=>{
        state.users.push(action.payload)
    },
    login2: (state,action) =>{
        const foundUser =state.users.find((user)=>user.email===action.payload.email && user.password===action.payload.password);
        if(foundUser){
            state.currentUser = foundUser;
        }
        else{
            state.currentUser=null;
        }
    },
    logout:(state)=>{
        state.currentUser=null;
    }

  },
}
)
export const { signup,login2,logout } = LoginSlice.actions

export default LoginSlice.reducer