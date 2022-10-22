import type { Reducer } from '@reduxjs/toolkit'

export const initialState = {
    name: null,
    brand: null,
    description: null,
    photo: null,
    price: null,
    qtd: null
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_ITEM':
        case 'ADD_QTD_ITEM':
        case 'REMOVE_ITEM':
        case 'REMOVE_QTD_ITEM':
        default: return state
    }
}

export default reducer