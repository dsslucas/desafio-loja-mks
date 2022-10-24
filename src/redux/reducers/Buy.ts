import type { Action } from '@reduxjs/toolkit'
import { connect } from 'react-redux';
import { AddItemToCart } from '../actions/ActionTypes'

export const initialState: any = {
    id: null,
    name: null,
    brand: null,
    description: null,
    photo: null,
    price: null,
    qtd: null
}

const buyReducer = (state = initialState, action: Action) => {
    const temp = action as AddItemToCart;
    // console.log(`
    // DENTRO DO REDUCER:
    // SITUAÇÃO DO ESTADO: ${state.id}
    // `)
    switch (action.type) {
        case 'ADD_ITEM_TO_CART': {
            // Primeiro dado que entra
            if (state.id === null) {
                return [{
                    id: temp.payload.id,
                    name: temp.payload.name,
                    brand: temp.payload.brand,
                    description: temp.payload.description,
                    photo: temp.payload.photo,
                    price: temp.payload.price,
                    qtd: 1
                }]
            }

            // Dados seguintes
            if (state.id === undefined) {
                return [...state, {
                    id: temp.payload.id,
                    name: temp.payload.name,
                    brand: temp.payload.brand,
                    description: temp.payload.description,
                    photo: temp.payload.photo,
                    price: temp.payload.price,
                    qtd: 1
                }]
            }
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
        default: return state
    }
}

export default buyReducer