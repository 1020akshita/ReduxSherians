import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { name: "ram", age: "25", id: 0 },
        { name: "sita", age: "21", id: 1 },
        { name: "radha", age: "27", id: 2 },
        { name: "krishna", age: "24", id: 3 },
        { name: "arjun", age: "28", id: 4 },
        { name: "karna", age: "30", id: 5 },
    ]
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userdelete: (state, action) => {
            // console.log(action)
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    },
})

export default UserSlice.reducer
export const { userdelete } = UserSlice.actions