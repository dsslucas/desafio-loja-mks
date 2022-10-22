import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from 'styled-components';
import Image from "./Image";

export default (props: any) => {
    const Card = styled.div`
        background-color: #FFFFFF;
        width: 13.598rem;
        height: 17.813rem;
        border-radius: 0.5rem;

        @media screen and (max-width: 600px){
            width: 15.656rem;
        }
    `

    const CardMainContent = styled.div`
        padding: 14px;
        padding-bottom: 0px
    `

    const CardContent = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    `

    const CardTitle = styled.h3`
        color: #2C2C2C;
        width: 65%;
        margin: 0;
    `

    const CardPrice = styled.span`
        background-color: #373737;
        color: #FFFFFF;
        border-radius: 8px;
        font-size: 0.938rem;
        width: 64px;
        height: 26px;
        display: flex;
        justify-content: center;
        align-items: center
    `

    const CardDescription = styled.p<{ color: any, size: any }>`
        color: ${props => props.color ? "#FFFFFF" : "#2C2C2C"};
        font-size: ${props => props.size ? '15px' : '10px'};
        margin-top: ${props => !props.size ? "8px" : "0"}
        margin-bottom: ${props => !props.size ? "12px" : "0"}
    `

    const CardImage = styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 14px;
    `

    const CardButton = styled.button`
        background-color: #0F52BA;
        color: #FFFFFF;
        width: 100%;
        height: 31.91px;
        padding: 0;
        margin: 0;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        border-color: #0F52BA;
        &:hover {
            background-color: #0D47A0;
            border-color: #0D47A0;
        }
    `

    return (
        <Card>
            <CardMainContent>
                <CardImage>
                    <Image image="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp" />
                </CardImage>

                <CardContent>
                    <CardTitle>Apple Watch Series 4 GPS</CardTitle>
                    <CardPrice>
                        <CardDescription color size>R$499</CardDescription>
                    </CardPrice>
                </CardContent>

                <CardDescription color={false} size={false}>Redesigned from scratch and completely revised.</CardDescription>
            </CardMainContent>



            <CardButton onClick={() => console.log("Cliquei")}>
                <FontAwesomeIcon icon={faBagShopping} /> COMPRAR
            </CardButton>
        </Card>
    )
}