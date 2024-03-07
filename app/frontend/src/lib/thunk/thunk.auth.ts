import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserService } from './../../../src/app/(User)/user.service';
import { typeInputs } from '@/types/formAuth.js';
import { typeForm } from '@/types/formAuth.js';
import { typeStore } from '@/types/store';

export type typeResponse = {
    user: typeInputs,
    type: typeForm
}

const initialState: typeStore = {
    user: {},
    status: 'idle',
    error: ""
}

export const fetchAuth = createAsyncThunk("auth", async ({ user, type }: typeResponse) => {
    const response = await UserService.sendRequest(user, type);
    return response.data;
})


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAuth.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.status = "succeeded"
                console.log(action)
            })
            .addCase(fetchAuth.rejected, (state, action) => {
                state.status = "failed"
                console.log('Ошибка авторизации, такой пользоатель сущствует или введенный неверный пароль')
                state.error = String(action.error.message)
            })
    }
})

export default userSlice.reducer;







// export const fetchAuth = createAsyncThunk(
//     'auth',
//     async ({ user, type }: typeResponse) => {
//         const response = await UserService.sendRequest(user, type)
//         console.log(response)
//         return response.data;
//     }
// );

// const authAdapter = createEntityAdapter();

// const authSlice = createSlice({
//     name: 'auth',
//     // Добавляем в состояние отслеживание процесса загрузки
//     // { ids: [], entities: {}, loadingStatus: 'idle', error: null }
//     initialState: authAdapter.getInitialState({ loadingStatus: 'idle' }),
//     reducers: {
//         // Любые редьюсеры, которые нам нужны
//     },
//     extraReducers: (builder) => {
//         builder
//             // Вызывается прямо перед выполнением запроса
//             .addCase(fetchAuth.pending, (state) => {
//                 state.loadingStatus = 'loading';
//             })
//             // Вызывается, если запрос успешно выполнился
//             .addCase(fetchAuth.fulfilled, (state, action) => {
//                 // Добавляем пользователя
//                 authAdapter.addOne(state, action);
//                 state.loadingStatus = 'idle';
//             })
//             // Вызывается в случае ошибки
//             .addCase(fetchAuth.rejected, (state, action) => {
//                 state.loadingStatus = 'failed';
//                 // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors
//                 console.log(action.error)
//             });
//     },
// })

// // Где-то в приложении


// // Внутри компонента
