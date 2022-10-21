import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  font-family: Montserrat;
  color: #FFFFFF
`

export default (props: any) => {
    return (
        <Title>
            {props.titulo}
        </Title>
    )
}