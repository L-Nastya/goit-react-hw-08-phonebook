import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

import { newUser, existUser, exit, getCurrent } from "../../services/auth-api"; 

export const addUser = createAsyncThunk(
    "user/register",
    async(data, {rejectWithValue}) => {
        try {
            const result = await newUser(data);
            return result;
        } catch ({response}) {
            const {status, data} = response;
            const error = {
                status,
                message: data.message,
            }
            toast.error('Fields are filled incorrectly. Try again')
            return rejectWithValue(error);
        }
    }
)

export const getUser = createAsyncThunk(
    "user/login",
    async(data, {rejectWithValue}) => {
        try {
            const result = await existUser(data);
            return result;
        } catch ({response}) {
            const {status, data} = response;
            const error = {
                status,
                message: data.message,
            }
            toast.error('Fields are filled incorrectly. Check the entered data')
            return rejectWithValue(error);
        }
    }
)

export const logout = createAsyncThunk(
    "user/logout",
    async(_, {rejectWithValue}) => {
        try {
            const result = await exit();
            return result;
        } catch ({response}) {
            const {status, data} = response;
            const error = {
                status,
                message: data.message,
            }
            return rejectWithValue(error);
        }
    }
)

export const current = createAsyncThunk(
    "user/current",
    async(_, {rejectWithValue, getState}) => {
        try {
            const {register} = getState()
            const result = await getCurrent(register.token);
            return result;
        } catch ({response}) {
            const {status, data} = response;
            const error = {
                status,
                message: data.message,
            }
            return rejectWithValue(error);
        }
    }
)