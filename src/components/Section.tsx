import React from "react";
import styled from 'styled-components';
import Card from "./Card";

const Section = styled.section`
    min-height: calc(100vh - 8.438rem);
    padding: 4.063rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 1400px) {
        padding: 0;
        background-color: red
    }
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 300px 300px;
    grid-gap: 15px;
`

export default (props: any) => {
    return (
        <Section>
            <GridWrapper>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </GridWrapper>

        </Section>
    )
}