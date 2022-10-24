import type { Action } from '@reduxjs/toolkit'
import { AddItemToCart, AddQtdSameItem, RemoveItemToCart, RemoveQtdSameItem } from '../actions/ActionTypes'

export const initialState: any = []

const buyReducer = (state = initialState, action: Action) => {
    const addItem = action as AddItemToCart;
    const removeItem = action as RemoveItemToCart;
    const increaseQtdItem = action as AddQtdSameItem;
    const decreaseQtdItem = action as RemoveQtdSameItem;

    console.log(state)

    switch (action.type) {
        case 'ERASE_LIST':
            return []
        case 'ADD_ITEM_TO_CART': {
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
        case 'ADD_QTD_SAME_ITEM': {
            const newList = increaseQtdItem.currentState.map((item: any) => {
                if (item.id === increaseQtdItem.itemInformedToIncreaseQtd.id) item.qtd = item.qtd + 1
                return item
            })
            return newList
        }
        case 'REMOVE_ITEM_TO_CART': {
            const newList = removeItem.currentState.filter((item: any) => item.id !== removeItem.itemInformedToExclude.id)
            return newList
        }
        case 'REMOVE_QTD_SAME_ITEM': {
            const newList = decreaseQtdItem.currentState.map((item: any) => {
                if (item.id === decreaseQtdItem.itemInformedToDecreaseQtd.id) item.qtd = item.qtd - 1
                return item
            })
            return newList
        }
        default: 
            return state
    }
}

export default buyReducer