import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'



let mem = createSlice({
    name: 'mem',
    initialState:
        [
            // { id: 0, name: '창목', count: 2 },
             { id: 2, name: '영인', count: 3 }
        ],
        reducers : {
            //횟수권 추가 Logic
            addCount(state, action){ //state 변경 함수
                let checkId = state.findIndex((a)=>{ return a.id === action.payload}) //array에서 원하는 것 몇번쨰 있나 찾아주는 함수 (지금은 id)
                state[checkId].count ++
            },
            //같이할래요 버튼누르면 state 상품 추가
            addMember(state, action){
                state.push(action.payload)
            },
            //횟수권 삭제하는 로직
            deleteCount(state, action){
                return state.filter(mem => mem.id !== action.payload);
            }
        }
})
export let { addCount, addMember, deleteCount } = mem.actions 

export default configureStore({ //#등록하는 것이라 생각하면 편함.
    reducer: {
        user: user.reducer,
        mem : mem.reducer
    }
}) 