import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonListCart } from "../../redux/actions/Page";
import api from "../../services/api";
import Card from "../card/Card";
import { GridWrapper, SectionComponent } from "./Styles";

function Section(props: any) {
    // Conteúdo vindo da API
    const [apiContent, setApiContent] = useState([])

    // Envio do clique para o Redux
    const dispatch = useDispatch()

    // Equivalente ao MapStateToProps
    const selector = useSelector((state:any) => state)

    // Armazenamento dos IDs dos produtos, importante para desativar o botão para a compra do mesmo produto
    const array: any = new Set();

    if (Array.isArray(selector.buy)) {
        selector.buy.map((item: any) => {
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
            background={selector.page.menuOpened === true ? "rgba(229,229,229,0.68)" : "#E5E5E5"}
            opacity={selector.page.menuOpened === true ? "0.5" : "1"}
            onClick={selector.page.menuOpened ? () => null : () => dispatch(buttonListCart(false))}
        >
            <GridWrapper>
                {apiContent.map((item: any, index: any) => {
                    return (
                        <Card
                            key={index}
                            item={item}
                            idReturnedRedux={array}
                            menuOpened={selector.page.listOpened}
                        />
                    )
                })
                }
            </GridWrapper>
        </SectionComponent>
    )
}

export default (Section)