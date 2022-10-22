import React from "react";
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  flexDirection: column;
  padding-left: 4.063rem;
  padding-right: 4.063rem;
  background-color: #EEEEEE;
  height: 2.125rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.75rem
`

export default (props: any) => {
    return (
        <Footer>
            MKS sistemas © Todos os direitos reservados
        </Footer>
    )
}