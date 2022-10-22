// Constantes
// export const ADD_ITEM_TO_CART = 'ADD_ITEM'
// export const ADD_QTD_ITEM = 'ADD_QTD_ITEM'
// export const REMOVE_ITEM_TO_CART = 'REMOVE_ITEM'
// export const REMOVE_QTD_ITEM = 'REMOVE_QTD_ITEM'

import { Action } from "redux";

export interface Cart { 
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    qtd: number
}

export interface AddItemToCart extends Action {
    type: 'ADD_ITEM_TO_CART'
}

export interface AddQtdSameItem extends Action {
    type: "ADD_QTD_SAME_ITEM"
}

export interface RemoveItemToCart extends Action {
    type: "REMOVE_ITEM_TO_CART"
}

export interface RemoveQtdSameItem extends Action {
    type: "REMOVE_QTD_SAME_ITEM"
}

export type ApplicationAction = | AddItemToCart | AddQtdSameItem | RemoveItemToCart | RemoveQtdSameItem;