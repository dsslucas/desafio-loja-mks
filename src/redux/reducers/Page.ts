import type { Action } from '@reduxjs/toolkit'
import { ButtonListCart } from '../actions/ActionTypes'

export const initialState: any = {
    listOpened: false
}

const pageReducer = (state = initialState, action: Action) => {
    const temp = action as ButtonListCart;
    switch (action.type) {
        case 'BUTTON_LIST_CART': 
            return {...state, listOpened: temp.payload}
        
        default: 
            return state
    }
}

export default pageReducer