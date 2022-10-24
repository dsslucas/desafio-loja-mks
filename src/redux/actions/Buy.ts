import { AddItemToCart, AddQtdSameItem, ButtonListCart, RemoveItemToCart, RemoveQtdSameItem } from "./ActionTypes";

export const addItemToCart = (data: any): AddItemToCart => ({
    type: 'ADD_ITEM_TO_CART',
    payload: data
});

export const addQtdSameItem = (currentState: any, itemInformedToIncreaseQtd: any): AddQtdSameItem => ({
    type: 'ADD_QTD_SAME_ITEM',
    currentState: currentState,
    itemInformedToIncreaseQtd: itemInformedToIncreaseQtd
})

export const removeItemCart = (currentState: any, itemInformedToExclude: any): RemoveItemToCart => ({
    type: 'REMOVE_ITEM_TO_CART',
    currentState: currentState,
    itemInformedToExclude: itemInformedToExclude
})

export const removeQtdSameItem = (data: any): RemoveQtdSameItem => ({
    type: 'REMOVE_QTD_SAME_ITEM',
    payload: data
})
