import React from "react";
import { connect } from "react-redux";
import { FooterComponent } from "./Styles";

const Footer = (props: any) => {
    const {page} = props

    return (
        <FooterComponent
            background={page === true ? "rgba(238,238,238,0.77)" : "#EEEEEE"}
            opacity={page === true ? "0.5" : "1"}
        >
            MKS sistemas © Todos os direitos reservados
        </FooterComponent>
    )
}

function mapStateToProps(state: any) {
    return { 
        page: state.page
    }
}

export default connect(mapStateToProps)(Footer);