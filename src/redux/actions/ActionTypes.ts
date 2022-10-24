import { Action } from "redux";

export interface Cart { 
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    qtd: number
}

export interface EraseList extends Action {
    type: "ERASE_LIST"
}

export interface AddItemToCart extends Action {
    type: 'ADD_ITEM_TO_CART',
    payload: any
}

export interface AddQtdSameItem extends Action {
    type: "ADD_QTD_SAME_ITEM",
    currentState: any,
    itemInformedToIncreaseQtd: any,
}

export interface RemoveItemToCart extends Action {
    type: "REMOVE_ITEM_TO_CART",
    currentState: any,
    itemInformedToExclude: any
}

export interface RemoveQtdSameItem extends Action {
    type: "REMOVE_QTD_SAME_ITEM",
    currentState: any,
    itemInformedToDecreaseQtd: any,
}

export interface ButtonListCart extends Action {
    type: "BUTTON_LIST_CART",
    payload: any
}

export type ApplicationAction = | AddItemToCart | AddQtdSameItem | RemoveItemToCart | RemoveQtdSameItem | ButtonListCart;