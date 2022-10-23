import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import api from "../services/api";
import Card from "./Card";

const SectionComponent = styled.section`
    min-height: calc(100vh - 8.438rem);
    padding: 4.063rem;
    display: flex;
    align-items: center;
    justify-content: center;
    

    @media screen and (max-width: 600px){
        padding: 0.75rem;
    };

    @media (min-width: 1200px) {
        
    }

    @media (min-width: 1400px) {
        padding: 0;
    }
`

const GridWrapper = styled.div`
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

function Section(props: any) {

    const [apiContent, setApiContent] = useState([])

    useEffect(() => {
        console.log("Recarreguei a página")

        async function respApi() {
            const { data } = await api.get('/products?page=1&rows=10&sortBy=id&orderBy=ASC')
            setApiContent(data.products)
        }
        respApi()
    }, []);

    return (
        <SectionComponent>
            <GridWrapper>
                {apiContent.map((item:any, index:any) => {
                    return (
                        <Card 
                            key={index}
                            item={item}
                            id={item.id}
                            name={item.name} brand={item.brand}
                            description={item.description} photo={item.photo}
                            price={Math.trunc(item.price)}
                        />
                        )
                    })
                }
            </GridWrapper>
        </SectionComponent>
    )
}

export default Section