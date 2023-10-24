import {ADD_TO_CART,REMOVE_FROM_CART, STATES} from './constant'
const initalstate = []

export const reducer = (state=initalstate,action) =>{
    switch(action.type){
        case(ADD_TO_CART):
            return [...state,action.data]
        case(REMOVE_FROM_CART):
            let result = state.filter(item=>{
                return item.id != action.data
            })
            return [...result]

        case(STATES) :
            let results = state.filter(item=>{
                return item.id == action.data
            })
            return [...results]

        default : 
            return state
    }
}