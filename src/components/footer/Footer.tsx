import React from "react";
import { useSelector } from "react-redux";
import { FooterComponent } from "./Styles";

const Footer = () => {
    // State from Redux
    const {listOpened} = useSelector((state:any) => state.page)

    return (
        <FooterComponent
            background={listOpened === true ? "rgba(238,238,238,0.77)" : "#EEEEEE"}
            opacity={listOpened === true ? "0.5" : "1"}
        >
            MKS sistemas © Todos os direitos reservados
        </FooterComponent>
    )
}

export default (Footer);