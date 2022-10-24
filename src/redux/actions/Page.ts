import { ButtonListCart } from "./ActionTypes";

export const buttonListCart = (data: any): ButtonListCart => ({
    type: "BUTTON_LIST_CART",
    payload: data
})
