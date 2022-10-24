import type { Action } from '@reduxjs/toolkit'
import { AddItemToCart, RemoveItemToCart } from '../actions/ActionTypes'

// export const initialState: any = {
//     id: null,
//     name: null,
//     brand: null,
//     description: null,
//     photo: null,
//     price: null,
//     qtd: null
// }

export const initialState: any = []

const buyReducer = (state = initialState, action: Action) => {
    const addItem = action as AddItemToCart;
    const removeItem = action as RemoveItemToCart;
    switch (action.type) {
        case 'ADD_ITEM_TO_CART': {
            // Primeiro dado que entra
            if (state.id === null) {
                return [{
                    id: addItem.payload.id,
                    name: addItem.payload.name,
                    brand: addItem.payload.brand,
                    description: addItem.payload.description,
                    photo: addItem.payload.photo,
                    price: addItem.payload.price,
                    qtd: 1
                }]
            }

            // Dados seguintes
            if (state.id === undefined) {
                return [...state, {
                    id: addItem.payload.id,
                    name: addItem.payload.name,
                    brand: addItem.payload.brand,
                    description: addItem.payload.description,
                    photo: addItem.payload.photo,
                    price: addItem.payload.price,
                    qtd: 1
                }]
            }
            break;
        }
        case 'ADD_QTD_SAME_ITEM': {
            console.log("[REDUCER] ADICIONAR QTD AO ITEM: ", action)
            break;
        }
        case 'REMOVE_ITEM_TO_CART': {
            console.log("[REDUCER] REMOVER ITEM: ", action)
            console.log(removeItem.currentState)
            console.log(removeItem.itemInformedToExclude.id)

            const newList = removeItem.currentState.filter((item:any) => item.id !== removeItem.itemInformedToExclude.id)

            return newList
        }
        case 'REMOVE_QTD_SAME_ITEM': {
            console.log("[REDUCER] RETIRAR QTD AO ITEM: ", action)
            break;
        }
        default: return state
    }
}

export default buyReducer