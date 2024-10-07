import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
    token: null | string
}

const defaultState: LoginState = {
    token: 'abc'
}

const authSlice = createSlice({
    name: 'authState',
    initialState: defaultState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        logout: (state) => {
            state.token = null
        }
    }
})


export const {login, logout} = authSlice.actions
export default authSlice.reducer