import React, { useEffect, useState } from "react";
import { connect, MapDispatchToProps, useDispatch } from "react-redux";
import styled from 'styled-components';
import { addItemToCart, addQtdSameItem, removeItemCart, removeQtdSameItem } from "../redux/actions/Buy";
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

const initialState: any = null

function Section(props: any) {

    const [apiContent, setApiContent] = useState([])
    const [listItems, setListItems] = useState([{}])
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("Recarreguei a página")

        async function respApi() {
            const { data } = await api.get('/products?page=1&rows=10&sortBy=id&orderBy=ASC')
            setApiContent(data.products)
        }
        respApi()
    }, []);

    // Manda os dados para o Redux
    function SendDataToRedux(data:any, type: string){
        switch(type){
            case "ADD_ITEM_CARRINHO": {
                console.log("COMPRAR")
                dispatch(addItemToCart(data))
                break;
            }
            case "ADD_QTD_ITEM": {
                dispatch(addQtdSameItem(data))
                break
            }
            case "REMOVER_ITEM_CARRINHO": {
                dispatch(removeItemCart(data))
                break
            }
            case "REMOVE_QTD_ITEM": {
                dispatch(removeQtdSameItem(data))
                break
            }
            default: console.log("Não entrei em nenhum")
        }
    }

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
                            return={SendDataToRedux}
                        />
                        )
                    })
                }
            </GridWrapper>
        </SectionComponent>
    )
}

// const mapDispatchToProps = (dispatch:any) => {
//     return {
//         addShoppingList: (test:any) => dispatch(addItemToCart())
//     }
// }


export default Section
// export default connect(null, mapDispatchToProps)(Section)