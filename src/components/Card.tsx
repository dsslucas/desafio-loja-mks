import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/actions/Buy";
import Button from "./Button";
import Image from "./Image";

import { CardComponent, CardDescriptionItem, CardDescriptionPrice, CardImage, CardMainContent, CardPrice, CardTextProduct, CardTitle, CardTitleAndPrice } from "./Styles";

const Card = (props: any) => {
    const dispatch = useDispatch()
    const { idReturnedRedux, item } = props;
    const disabled = idReturnedRedux.has(item.id);
    return (
        <CardComponent {...props}>
            <CardMainContent>
                <CardImage>
                    <Image image={item.photo} imageWidth="fit-content" />
                </CardImage>

                <CardTitleAndPrice>
                    <CardTitle>{item.name}</CardTitle>

                    <CardPrice>
                        <CardDescriptionPrice {...props}
                            color="#FFFFFF" size='0.938rem'
                            fontWeight="700"
                            lineHeight="15px"
                        >
                            R${Math.trunc(item.price).toLocaleString('pt-br')}
                        </CardDescriptionPrice>
                    </CardPrice>
                </CardTitleAndPrice>

                <CardTextProduct>
                    <CardDescriptionItem {...props}
                        color="#2C2C2C" size='0.625rem'
                        fontWeight="600" lineHeight="12px"
                    >
                        {item.description}
                    </CardDescriptionItem>
                </CardTextProduct>

            </CardMainContent>

            <Button
                background="#0F52BA" backgroundHover={disabled ? "#0F52BA" : "#0D47A0"} color="#FFFFFF"
                width="100%" height="31.91px"
                padding="0" margin="0" justifyContent="space-evenly"
                borderLeftRightBottom="0.5rem" borderWidth="0"
                borderColor="#0F52BA" borderColorHover={disabled ? "#0F52BA" : "#0D47A0"}
                style={disabled ? { cursor: "not-allowed" } : { cursor: "pointer" }}
                // data={props}
                fontWeight="600" size="14px" lineHeight="18px"
                disabled={disabled}
                onClick={() => {
                    dispatch(addItemToCart(item))
                }}
            >
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.737212" fillRule="evenodd" clipRule="evenodd" d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.737212" d="M1 4.375H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.737212" d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>



                COMPRAR
            </Button>




            {/* <CardButton onClick={() => console.log("Cliquei")}>

            </CardButton> */}
        </CardComponent>
    )
}

export default (Card)