import React from "react";
import styled from 'styled-components';
import { SubtitleComponent } from "./Styles";


const Subtitle = (props: any) => {
    return (
        <SubtitleComponent {...props}>
            {props.subtitulo}
        </SubtitleComponent>
    )
}

export default Subtitle