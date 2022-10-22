import React from "react";
import styled from 'styled-components';

const Image = (props: any) => {
    const ImageComponent = styled.img`
        max-width: 67%;
    `

    return (
        <ImageComponent src={props.image} />
    )
}

export default Image