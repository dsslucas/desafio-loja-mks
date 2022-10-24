import { AddItemToCart, AddQtdSameItem, EraseList, RemoveItemToCart, RemoveQtdSameItem } from "./ActionTypes";

export const eraseList = (): EraseList => ({
    type: "ERASE_LIST"
})

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

export const removeQtdSameItem = (currentState: any, itemInformedToDecreaseQtd: any): RemoveQtdSameItem => ({
    type: 'REMOVE_QTD_SAME_ITEM',
    currentState: currentState,
    itemInformedToDecreaseQtd: itemInformedToDecreaseQtd
})
