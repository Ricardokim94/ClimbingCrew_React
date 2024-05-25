import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({     //#useState()역할임.
    name: 'user',           //state이름
    initialState: 'kim'    //실제 값
})

let mem = createSlice({
    name: 'mem',
    initialState:
        [
            { id: 0, name: '창목', count: 2 },
            { id: 2, name: '영인', count: 1 }
        ]
})


export default configureStore({ //#등록하는 것이라 생각하면 편함.ㄴ
    reducer: {
        user: user.reducer,
        mem : mem.reducer
    }
}) 