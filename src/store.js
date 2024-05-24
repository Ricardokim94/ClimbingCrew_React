import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({     //#useState()역할임.
    name: 'user',           //state이름
    initialState: 'kim'    //실제 값
})

let shoes = createSlice({
    name: 'shoes',
    initialState:
        [
            { id: 0, name: 'White and Black', count: 2 },
            { id: 2, name: 'Grey Yordan', count: 1 }
        ]
})


export default configureStore({ //#등록하는 것이라 생각하면 편함.
    reducer: {
        user: user.reducer,
        shoes : shoes.reducer
    }
}) 