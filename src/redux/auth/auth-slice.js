import { createSlice} from "@reduxjs/toolkit";

import { addUser, getUser, logout, current } from "./auth-operations";

const initialState = {
    user: {},
    token: '',
    isLogin: false,
    loading: false,
    error: null,
}

const UserSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [addUser.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [addUser.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
          [addUser.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload;
        },
           [getUser.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [getUser.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
          [getUser.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload;
        },
          [logout.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [logout.fulfilled]: (store) => {
            store.loading = false;
            store.user = {};
            store.token = "";
            store.isLogin = false;
        },
        [logout.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [current.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [current.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [current.rejected]: (store, {payload}) => {
            store.loading = false;
            store.token = "";
            store.error = payload;
        },
    }

})
export default UserSlice.reducer;
