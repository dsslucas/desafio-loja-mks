import { AddItemToCart, AddQtdSameItem, ButtonListCart, RemoveItemToCart, RemoveQtdSameItem } from "./ActionTypes";

export const addItemToCart = (data: any): AddItemToCart => ({
    type: 'ADD_ITEM_TO_CART',
    payload: data
});

export const addQtdSameItem = (data: any): AddQtdSameItem => ({
    type: 'ADD_QTD_SAME_ITEM',
    payload: data
})

export const removeItemCart = (data: any): RemoveItemToCart => ({
    type: 'REMOVE_ITEM_TO_CART',
    payload: data
})

export const removeQtdSameItem = (data: any): RemoveQtdSameItem => ({
    type: 'REMOVE_QTD_SAME_ITEM',
    payload: data
})
