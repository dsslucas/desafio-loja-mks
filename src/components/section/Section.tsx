import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonListCart } from "../../redux/actions/Page";
import api from "../../services/api";
import Card from "../card/Card";
import { GridWrapper, SectionComponent } from "./Styles";

function Section() {
    // API content
    const [apiContent, setApiContent] = useState([])

    // Send data for Redux
    const dispatch = useDispatch()

    // Received data from Redux
    const {buy, page} = useSelector((state:any) => state)

    // ID products storage. Important for block the button if the item goes to cart
    const array: any = new Set();

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
            background={page.menuOpened === true ? "rgba(229,229,229,0.68)" : "#E5E5E5"}
            opacity={page.menuOpened === true ? "0.5" : "1"}
            onClick={page.menuOpened ? () => null : () => dispatch(buttonListCart(false))}
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

export default (Section)