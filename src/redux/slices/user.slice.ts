import { userEmptyState } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user', // -> nombre que representa el slice
    initialState: userEmptyState,
    reducers: { // -> las propiedades son los tipos de acciones -> [sliceName]/reducer -> ex. user/createUser
        createUser: (state, action) => {
            return action.payload;
        },
        modifyUser: (state, action) => {
            const formattedData = { ...state, ...action.payload };
            return formattedData;
        },
        resetUser: () => {
            return userEmptyState;
        }
    }
})

export const { createUser, modifyUser, resetUser } = userSlice.actions;
export default userSlice.reducer;