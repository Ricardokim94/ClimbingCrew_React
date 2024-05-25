import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({     //#useState()역할임.
    name: 'user',           //state이름
    initialState: { name : 'kim', age : 20},    //실제 값

    reducers : {            //Redux의 state 변경하는 법 (수정)
        changeName(state){                // state 수정해주는 함수만들고 
            state.name = 'park'     // 원할 때 그 함수 실행해달라고 store.js에 요청
        },
        increase(state, action){  // +1증가말고도 여러 경우의 수 더할경우 대비하여 파라미터 a생성
            state.age += action.payload //이경우 payload 입력
        }
    }                       
})

export let { changeName, increase } = user.actions //만든 함수 export

export default user;