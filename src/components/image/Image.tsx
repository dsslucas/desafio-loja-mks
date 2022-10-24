import React from "react";
import { ImageComponent } from "./Styles";

const Image = (props: any) => {
    return (
        <ImageComponent src={props.image} {...props}/>
    )
}

export default Image