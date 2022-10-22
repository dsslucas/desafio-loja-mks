// import { ADD_ITEM_TO_CART, ADD_QTD_ITEM, REMOVE_ITEM_TO_CART, REMOVE_QTD_ITEM } from "./ActionTypes"

import { Cart, AddItemToCart, AddQtdSameItem, RemoveItemToCart, RemoveQtdSameItem } from "./ActionTypes";

// // Adiciona um item no carrinho
// export const addItemCart = (shoppingList:any) => {
//     return {
//         type: ADD_ITEM_TO_CART,
//         payload: shoppingList
//     }
// }

// // Adiciona um item a mais, desde que seja o mesmo produto
// export const addSameItemCart = (shoppingList:any) => {
//     return {
//         type: ADD_QTD_ITEM,
//         payload: shoppingList
//     }
// }

// // Remove um item do carrinho
// export const removeItemCart = (shoppingList:any) => {
//     return {
//         type: REMOVE_ITEM_TO_CART,
//         payload: shoppingList
//     }
// }

// // Redux a quantidade de um produto
// export const removeSameItemCart = (shoppingList:any) => {
//     return {
//         type: REMOVE_QTD_ITEM,
//         payload: shoppingList
//     }
// }

export const addItemToCart = () : AddItemToCart => ({
    type: 'ADD_ITEM_TO_CART'
});

export const addQtdSameItem = () : AddQtdSameItem => ({
    type: 'ADD_QTD_SAME_ITEM'        
})

export const removeItemCart = () : RemoveItemToCart => ({
    type: 'REMOVE_ITEM_TO_CART'
})

export const removeQtdSameItem = () : RemoveQtdSameItem => ({
    type: 'REMOVE_QTD_SAME_ITEM'
})

