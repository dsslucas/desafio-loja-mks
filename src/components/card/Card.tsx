import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/actions/Buy";
import Button from "../button/Button";
import Image from "../image/Image";

import { CardComponent, CardDescriptionItem, CardDescriptionPrice, CardImage, CardMainContent, CardPrice, CardTextProduct, CardTitle, CardTitleAndPrice } from "./Styles";

const Card = (props: any) => {
    // Send data to Redux
    const dispatch = useDispatch()

    const { idReturnedRedux, item, menuOpened } = props;

    // Disable button if the item goes to cart
    const disabled = idReturnedRedux.has(item.id);

    return (
        <CardComponent {...props} opacity={menuOpened ? '0.4' : "1"}>
            <CardMainContent>
                <CardImage>
                    <Image image={item.photo} imageWidth="fit-content" smWidth="fit-content" />
                </CardImage>

                <CardTitleAndPrice>
                    <CardTitle>{item.name}</CardTitle>

                    <CardPrice>
                        <CardDescriptionPrice {...props}
                            color="#FFFFFF" fontSize='0.938rem'
                            fontWeight="700"
                            lineHeight="15px"

                            smFontWeight="700" smFontSize="15px" smLineHeight="15px"
                        >
                            R${Math.trunc(item.price).toLocaleString('pt-br')}
                        </CardDescriptionPrice>
                    </CardPrice>
                </CardTitleAndPrice>

                <CardTextProduct>
                    <CardDescriptionItem {...props}
                        color="#2C2C2C" fontSize='0.625rem'
                        fontWeight="600" lineHeight="12px"

                        smFontWeight="600" smFontSize="10px" smLineHeight="12px"
                    >
                        {item.description}
                    </CardDescriptionItem>
                </CardTextProduct>

            </CardMainContent>

            <Button
                background="#0F52BA" 
                backgroundHover={disabled || menuOpened ? "#0F52BA" : "#0D47A0"} color="#FFFFFF"
                width="100%" height="31.91px"
                padding="0" margin="0" justifyContent="space-evenly"
                borderLeftRightBottom="0.5rem" borderWidth="0"
                borderColor="#0F52BA" borderColorHover={disabled || menuOpened ? "#0F52BA" : "#0D47A0"}
                style={disabled || menuOpened ? { cursor: "not-allowed" } : { cursor: "pointer" }}
                fontWeight="600" fontSize="14px" lineHeight="18px"
                disabled={disabled || menuOpened }
                onClick={() => {
                    dispatch(addItemToCart(item))
                }}
                smHeight="36.72px" smFontWeight="600" smFontSize="14px" smLineHeight="18px"
            >
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.737212" fillRule="evenodd" clipRule="evenodd" d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.737212" d="M1 4.375H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.737212" d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                COMPRAR
            </Button>
        </CardComponent>
    )
}

export default (Card)