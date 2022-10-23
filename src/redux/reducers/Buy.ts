import type { Action } from '@reduxjs/toolkit'
import { AddItemToCart } from '../actions/ActionTypes'

export const initialState: any = {
    id: undefined,
    name: undefined,
    brand: undefined,
    description: undefined,
    photo: undefined,
    price: undefined,
    qtd: undefined
}

const reducer = (state = initialState, action: Action) => {
    console.log("Entrei no Reducer")
    const temp = action as AddItemToCart;
    switch (action.type) {
        case 'ADD_ITEM_TO_CART': {
            //AddItemToCart lol = (AddItemToCart)action;
            console.log("[REDUCER] ADICIONAR ITEM: ", temp.payload);
            console.log("[ESTADO ANTERIOR: ", state)
            break;
        }
        case 'ADD_QTD_ITEM': {
            console.log("[REDUCER] ADICIONAR QTD AO ITEM: ", action)
            break;
        }
        case 'REMOVE_ITEM': {
            console.log("[REDUCER] REMOVER ITEM: ", action)
            break;
        }
        case 'REMOVE_QTD_ITEM': {
            console.log("[REDUCER] RETIRAR QTD AO ITEM: ", action)
            break;
        }
    }
}

export default reducer