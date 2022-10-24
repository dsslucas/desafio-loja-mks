import React from "react";
import { SubtitleComponent } from "./Styles";

const Subtitle = (props: any) => {
    return (
        <SubtitleComponent {...props}>
            {props.subtitulo}
        </SubtitleComponent>
    )
}

export default Subtitle