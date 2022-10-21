import React from "react";
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  flexDirection: column;
  padding-left: 4.063rem;
  padding-right: 4.063rem;
`

export default (props: any) => {
    return (
        <Footer>
            <h1>Content</h1>
            <p>Anônimo</p>
        </Footer>
    )
}