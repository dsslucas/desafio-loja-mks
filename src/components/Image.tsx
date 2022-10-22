import React from "react";
import styled from 'styled-components';

export default (props: any) => {
    const Image = styled.img`
        max-width: 67%;
    `

    return (
        <Image src={props.image} />
    )
}