import type { Action } from '@reduxjs/toolkit'
import { connect } from 'react-redux';
import { AddItemToCart, ButtonListCart } from '../actions/ActionTypes'

export const initialState: any = {
    listOpened: false
}

const pageReducer = (state = initialState, action: Action) => {
    const temp = action as ButtonListCart;
    // console.log(`
    // DENTRO DO REDUCER:
    // SITUAÇÃO DO ESTADO: ${state.id}
    // `)
    switch (action.type) {
        case 'BUTTON_LIST_CART': {
            console.log("NO REDUCER: ", temp.payload)
            return temp.payload
            // return {listOpened: !state.listOpened
        }
        
        default: return state
    }
}

export default pageReducer