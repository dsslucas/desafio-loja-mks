import styled from "styled-components";

interface Props {
  background?: string;
  opacity?: string
}

export const FooterComponent = styled.footer<Props>`
  display: flex;
  flexDirection: column;
  padding-left: 4.063rem;
  padding-right: 4.063rem;
  height: 2.125rem;

  align-items: center;
  justify-content: center;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  background-color: ${props => props.background};
  opacity: ${props => props.opacity};     
`