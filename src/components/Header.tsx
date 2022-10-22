import React from "react";
import styled from 'styled-components';
import Subtitle from "./Subtitle";
import Title from "./Title";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Span from "./Span";

export default (props: any) => {
    const Header = styled.header`
    background-color: #0F52BA;
    display: flex;
    padding-left: 4.063rem;
    padding-right: 4.063rem;
    justify-content: space-between;
    font-family: Montserrat;
    align-items: center;
    height: 6.313rem
  `

    const Column = styled.div<{ card: any, header: any }>`
      display: flex;
      justify-content: space-evenly;
      align-items: ${props => props.header ? 'flex-end' : 'center'};
      background-color: ${props => props.card ? "#FFFFFF" : null};
      height: ${props => props.card ? '2.813rem' : 'auto'};
      width: ${props => props.card ? "5.625rem" : "auto"};
      border-radius: ${props => props.card ? "0.5rem" : "0rem"}
  `

    return (
        <Header>
            <Column card={false} header>
                <Title titulo="MK5" />
                <Subtitle subtitulo="Sistemas" />
            </Column>

            <Column card header={false}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <Span number={8} />
            </Column>


        </Header>
    )
}