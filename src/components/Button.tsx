import React, { Component, useState } from "react";
import { ButtonComponent } from "./Styles";

const Button = (props: any) => {
    return (
        <ButtonComponent {...props} onClick={() => props.onReturn(props.data)}>
            {props.children}
        </ButtonComponent>
    )
}

export default Button