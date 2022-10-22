import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from 'styled-components';
import Button from "./Button";
import Image from "./Image";

import { CardComponent, CardDescription, CardImage, CardMainContent, CardPrice, CardTextProduct, CardTitle, CardTitleAndPrice } from "./Styles";

const Card = (props: any) => {

    return (
        <CardComponent {...props}>
            <CardMainContent>
                <CardImage>
                    <Image image={props.photo} />
                </CardImage>

                <CardTitleAndPrice>
                    <CardTitle>{props.name}</CardTitle>

                    <CardPrice>
                        <CardDescription {...props} color="#FFFFFF" size='0.938rem'>R${props.price.toLocaleString('pt-br')}</CardDescription>
                    </CardPrice>
                </CardTitleAndPrice>

                <CardTextProduct>
                    <CardDescription {...props} color="#2C2C2C" size='0.625rem'>{props.description}</CardDescription>
                </CardTextProduct>

            </CardMainContent>

            <Button
                background="#0F52BA" backgroundHover="#0D47A0" color="#FFFFFF"
                width="100%" height="31.91px"
                padding="0" margin="0" justifyContent="space-evenly"
                borderLeftRightBottom="0.5rem" borderWidth="0"
                borderColor="#0F52BA" borderColorHover=" #0D47A0"
                // data={props}
                onClick={() => props.return(props.item, "ADD_ITEM_CARRINHO")}
            >
                <FontAwesomeIcon icon={faBagShopping} />COMPRAR
            </Button>




            {/* <CardButton onClick={() => console.log("Cliquei")}>

            </CardButton> */}
        </CardComponent>
    )
}

export default Card