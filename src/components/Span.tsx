import React from "react";
import styled from 'styled-components';
import Subtitle from "./Subtitle";
import Title from "./Title";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default (props: any) => {
  const Span = styled.span`
    font-size: 18px;
    font-weight: bold;

    
  `
  return (
    <Span onClick={() => console.log("Cliquei aqui")}>
      {props.number}
    </Span>
  )
}