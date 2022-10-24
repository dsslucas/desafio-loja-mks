import type { Action } from '@reduxjs/toolkit'
import { connect } from 'react-redux';
import { AddItemToCart, ButtonListCart } from '../actions/ActionTypes'

export const initialState: any = {
    listOpened: false
}

const pageReducer = (state = initialState, action: Action) => {
    const temp = action as ButtonListCart;
    switch (action.type) {
        case 'BUTTON_LIST_CART': {
            return {...state, listOpened: temp.payload}
        }
        
        default: 
            if (state.listOpened === undefined) return false
            else return state
    }
}

export default pageReducer