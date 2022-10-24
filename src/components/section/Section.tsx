import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import styled from 'styled-components';
import api from "../../services/api";
import Card from "../card/Card";
import { GridWrapper, SectionComponent } from "./Styles";

function Section(props: any) {
    // Conteúdo vindo da API
    const [apiContent, setApiContent] = useState([])

    // Armazenamento dos IDs dos produtos, importante para desativar o botão para a compra do mesmo produto
    const array: any = new Set();

    // Vindo do Redux
    const { buy } = props
    const { page } = props

    if (Array.isArray(buy)) {
        buy.map((item: any) => {
            array.add(item.id)
        })
    }

    useEffect(() => {
        async function respApi() {
            const { data } = await api.get('/products?page=1&rows=10&sortBy=id&orderBy=ASC')
            setApiContent(data.products)
        }
        respApi()
    }, []);

    return (
        <SectionComponent
            background={page === true ? "rgba(229,229,229,0.68)" : "#E5E5E5"}
            opacity={page === true ? "0.5" : "1"}
        >
            <GridWrapper>
                {apiContent.map((item: any, index: any) => {
                    return (
                        <Card
                            key={index}
                            item={item}
                            idReturnedRedux={array}
                            menuOpened={page.listOpened}
                        />
                    )
                })
                }
            </GridWrapper>
        </SectionComponent>
    )
}

function mapStateToProps(state: any) {
    return {
        buy: state.buy,
        page: state.page
    }
}

export default connect(mapStateToProps)(Section)