import { AddItemToCart, AddQtdSameItem, ButtonListCart, RemoveItemToCart, RemoveQtdSameItem } from "./ActionTypes";

export const buttonListCart = (data: any): ButtonListCart => ({
    type: "BUTTON_LIST_CART",
    payload: data
})
