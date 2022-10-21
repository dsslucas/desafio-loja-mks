import React from "react";
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  height: 100vh;
  flexDirection: column;
  padding-left: 4.063rem;
  padding-right: 4.063rem;
`

export default (props: any) => {
    return (
        <Section>
            <h1>Content</h1>
            <p>Anônimo</p>
        </Section>
    )
}