import {ADD_TO_CART,REMOVE_FROM_CART, STATES} from './constant'

export function addtoCart (item){
    return {
        type : ADD_TO_CART,
        data : item
    }
}

export function removefromcart (item){
    return{
        type : REMOVE_FROM_CART,
        data : item
    }
}

export function samestate (item) {
    return {
        type : STATES,
        data : item
    }
}