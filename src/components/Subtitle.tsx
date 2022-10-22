import React from "react";
import styled from 'styled-components';

const Subtitle = styled.p`
    font-family: Montserrat;
    color: #FFFFFF;
    @media screen and (max-width: 600px){
        font-size: 1rem
    }
`

export default (props: any) => {
    return (
        <Subtitle>
            {props.subtitulo}
        </Subtitle>
    )
}