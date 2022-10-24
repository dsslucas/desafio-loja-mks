import styled from "styled-components";

interface Props {
    background?: string;
    opacity?: string
}

export const SectionComponent = styled.section<Props>`
    min-height: calc(100vh - 8.438rem);
    padding: 4.063rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.background};
    opacity: ${props => props.opacity};     

    @media screen and (max-width: 600px){
        padding: 0.75rem;
    };

    @media (min-width: 1200px) {
        
    }

    @media (min-width: 1400px) {
        padding: 0;
    }
`

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 310px;
    grid-gap: 22.44px;

    @media only screen and (max-width: 990px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap
    }
`