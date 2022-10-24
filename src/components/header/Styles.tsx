import styled from "styled-components";

interface Props {
    background?: string;
    opacity?: string
}

export const HeaderComponent = styled.header<Props>`
    background-color: ${props => props.background};
    opacity: ${props => props.opacity}; 
    display: flex;
    padding-left: 4.063rem;
    padding-right: 4.063rem;
    justify-content: space-between;
    font-family: Montserrat;
    align-items: center;
    height: 6.313rem;
    
    @media screen and (max-width: 600px){
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        height: 3rem
    }
`

export const Column = styled.div<{ card: any, header: any }>`
        display: flex;
        justify-content: space-evenly;
        align-items: ${props => props.header ? 'flex-end' : 'center'};
        background-color: ${props => props.card ? null : null};
        height: ${props => props.card ? '2.813rem' : 'auto'};
        width: ${props => props.card ? "5.625rem" : "auto"};
        border-radius: ${props => props.card ? "0.5rem" : "0rem"};

        @media screen and (max-width: 600px){
            height: ${props => props.card ? '1.625rem' : 'auto'};
            width: ${props => props.card ? "3.25rem" : "auto"};
        }
    `