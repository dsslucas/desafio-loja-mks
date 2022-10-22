import React from "react";
import styled from 'styled-components';

const SubtitleComponent = styled.p`
    font-family: Montserrat;
    color: #FFFFFF;
    @media screen and (max-width: 600px){
        font-size: 1rem
    }
`
const Subtitle = (props: any) => {
    return (
        <SubtitleComponent>
            {props.subtitulo}
        </SubtitleComponent>
    )
}

export default Subtitle