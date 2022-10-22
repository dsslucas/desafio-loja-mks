import React from "react";
import styled from 'styled-components';
import Subtitle from "./Subtitle";
import Title from "./Title";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Span from "./Span";
import Button from "./Button";

const HeaderComponent = styled.header`
        background-color: #0F52BA;
        display: flex;
        padding-left: 4.063rem;
        padding-right: 4.063rem;
        justify-content: space-between;
        font-family: Montserrat;
        align-items: center;
        height: 6.313rem;
        
        @media screen and (max-width: 600px){
            padding-left: 1.25rem;
            padding-right: 1.25rem;
            height: 3rem
        }
    `

    const Column = styled.div<{ card: any, header: any }>`
        display: flex;
        justify-content: space-evenly;
        align-items: ${props => props.header ? 'flex-end' : 'center'};
        background-color: ${props => props.card ? null : null};
        height: ${props => props.card ? '2.813rem' : 'auto'};
        width: ${props => props.card ? "5.625rem" : "auto"};
        border-radius: ${props => props.card ? "0.5rem" : "0rem"};

        @media screen and (max-width: 600px){
            height: ${props => props.card ? '1.625rem' : 'auto'};
            width: ${props => props.card ? "3.25rem" : "auto"};
        }
    `

const Header = (props: any) => {


    return (
        <HeaderComponent>
            <Column card={false} header>
                <Title titulo="MKS" />
                <Subtitle subtitulo="Sistemas" />
            </Column>

            <Column card header={false}>
                <Button
                    width="100%" height="100%" justifyContent="space-around"
                    background="#ffffff" backgroundHover="#E9E9E9"
                    borderWidth="0" borderRadius="0.5rem"
                    onClick={() => console.log("Botão de Carrinho")}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <Span number={8} />
                </Button>

            </Column>
        </HeaderComponent>
    )
}

export default Header