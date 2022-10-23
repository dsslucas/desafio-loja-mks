import React from "react";
import styled from 'styled-components';

const SubtitleComponent = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
    color: #FFFFFF;
    mix-blend-mode: normal;

    @media screen and (max-width: 600px){
        font-size: 16px;
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