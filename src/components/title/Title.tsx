import React from "react";
import { TitleComponent } from "./Styles";

const Title = (props: any) => {
    return (
        <TitleComponent {...props}>
            {props.titulo}
        </TitleComponent>
    )
}

export default Title