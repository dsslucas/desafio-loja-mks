import React from "react";
import styled from 'styled-components';

const TitleComponent = styled.h1`
  font-family: Montserrat;
  color: #FFFFFF;
  @media screen and (max-width: 600px){
    font-size: 2rem
}
`

const Title = (props: any) => {
    return (
        <TitleComponent>
            {props.titulo}
        </TitleComponent>
    )
}

export default Title