'use client'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserService } from './../../../src/app/(User)/user.service';
import { typeInputs } from '@/types/formAuth.js';
import { typeForm } from '@/types/formAuth.js';
import { typeStore } from '@/types/store';
import { toast } from 'sonner';

export type typeResponse = {
    user: typeInputs,
    type: typeForm
}

const initialState: typeStore = {
    user: {},
};


export const fetchAuth = createAsyncThunk("auth", async ({ user, type }: typeResponse) => {
    const response = await UserService.sendRequest(user, type);
    return response;
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = {};
            toast.info(`Выход из профиля`);
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.user = action.payload;
                toast.success(`Вход выполнень, email: ${state.user.email}`);
            })
            .addCase(fetchAuth.rejected, (_, action) => {
                const type = action.meta.arg.type;
                toast.error(`Ошибка авторизации:
                ${type === 'login'
                        ? 'Невозможно войти, введен неверный логин или пароль'
                        : 'Невозможно создать пользователя, email уже занят'}`);
            })
    }
})


export const { logout } = userSlice.actions;
export default userSlice.reducer;
