import React from "react";
import styled from 'styled-components';

const Subtitle = styled.p`
    font-family: Montserrat;
    color: #FFFFFF
`

export default (props: any) => {
    return (
        <Subtitle>
            {props.subtitulo}
        </Subtitle>
    )
}