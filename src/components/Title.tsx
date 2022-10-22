import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  font-family: Montserrat;
  color: #FFFFFF;
  @media screen and (max-width: 600px){
    font-size: 2rem
}
`

export default (props: any) => {
    return (
        <Title>
            {props.titulo}
        </Title>
    )
}