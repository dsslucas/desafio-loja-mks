import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addQtdSameItem, removeItemCart } from "../../redux/actions/Buy";
import { buttonListCart } from "../../redux/actions/Page";
import Button from "../button/Button";
import Image from "../image/Image";
import Span from "../span/Span";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";

import { ListContent, ListDividerQtdSpan, ListFinalButton, ListFinalCart, ListHeader, ListItemMain, ListItemPrice, ListItemQtd, ListItemQtdButtons, ListItemRemove, ListWrapper } from "./Styles";

const ListCart = (props: any) => {
    const [shoppingList, setShoppingList] = useState<any>([])

    // Conexão com o Redux
    const dispatch = useDispatch()

    // Pega os dados do Redux
    const selector = useSelector((state: any) => state.buy)

    // Necessário para renderização do icone de exclusão
    const width = window.innerWidth

    useEffect(() => {
        setShoppingList(selector)
    }, [selector])

    return (
        <ListWrapper>
            <ListHeader>
                <Title
                    titulo="Carrinho de compras"
                    fontWeight="800" fontSize="27px" lineHeight="32.91px" width="40%"

                    smFontWeight="700" smfontSize="27px" smLineHeight="33px" smWidth="60%"
                />
                <Button
                    onClick={() => dispatch(buttonListCart(false))}
                    background="transparent"
                    borderWidth="0px"
                    style={{ cursor: 'pointer' }}
                >
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="19" cy="19" r="19" fill="black" />
                        <path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white" />
                    </svg>
                </Button>
            </ListHeader>

            <ListContent>
                {shoppingList.map((item: any, index: any) => {
                    return (
                        <ListItemMain key={index}>
                            {width <= 600 && (
                                <ListItemRemove>
                                    <Button
                                        color="transparent"
                                        border-width="0px" borderWidth="0" justifyContent="justify-content"
                                        background="transparent"
                                        style={{ cursor: 'pointer' }}
                                        padding="0"
                                        onClick={() => dispatch(removeItemCart(shoppingList, item))}
                                    >
                                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.63 22.8113L12.81 11.4713L21.126 0.719309H17.85L11.214 9.37131L4.578 0.719309H1.218L9.534 11.4713L0.798 22.8113H4.158L11.214 13.5713L18.228 22.8113H21.63Z" fill="black" />
                                        </svg>
                                    </Button>
                                </ListItemRemove>
                            )}

                            <Image
                                width="90px" smWidth="110px" src={item.photo} />

                            <Title
                                titulo={item.name}
                                fontWeight="600" fontSize="13px" lineHeight="17px" color="#2C2C2C"
                                width="30%"

                                smFontWeight="600" smfontSize="16px" smLineHeight="19px" smWidth="211px" smTextAlign="center"
                            />

                            <ListDividerQtdSpan>
                                <ListItemQtd>
                                    <Subtitle subtitulo="Qtd"
                                        color="#000000"
                                        fontWeight="600" fontSize="5px" lineHeight="6px"
                                        smDisplay="none"
                                    />
                                    <ListItemQtdButtons>
                                        <Button
                                            color="#000000"
                                            borderWidth="0" justifyContent="justify-content"
                                            background="transparent"
                                            fontWeight="600" fontSize="12px" lineHeight="14.63px"
                                            smFontSize="24px" smFontWeight="400" smLineHeight="29.26px"
                                            disabled={item.qtd <= 1 ? true : false}
                                            style={item.qtd <= 1 ? { cursor: "not-allowed" } : { cursor: "pointer" }}
                                            
                                        >
                                            -
                                        </Button>
                                        <Span
                                            number={item.qtd}
                                            fontWeight="600" fontSize="8px" lineHeight="10px" color="#000000"

                                            smFontSize="20px" smFontWeight="400px" smLineHeight="24.38px"
                                        />
                                        <Button
                                            color="#000000"
                                            border-width="0px" borderWidth="0" justifyContent="justify-content"
                                            background="transparent"
                                            style={{ cursor: 'pointer' }}
                                            fontWeight="600" fontSize="12px" lineHeight="14.63px"
                                            smFontSize="24px" smFontWeight="400" smLineHeight="29.26px"
                                            onClick={() => dispatch(addQtdSameItem(shoppingList, item))}
                                        >
                                            +
                                        </Button>
                                    </ListItemQtdButtons>
                                </ListItemQtd>

                                <ListItemPrice>
                                    <Span
                                        number={`R$${Math.trunc(item.price).toLocaleString('pt-br')}`}
                                        fontWeight="900" fontSize="14px" lineHeight="17px" color="#000000"

                                        smFontWeight="700" smFontSize="15px" smLineHeight="15px" smColor="#FFFFFF"
                                    />
                                </ListItemPrice>
                            </ListDividerQtdSpan>

                            <ListItemRemove>
                                {
                                    width > 600 && (
                                        <Button
                                            color="transparent"
                                            border-width="0px" borderWidth="0" justifyContent="justify-content"
                                            background="transparent"
                                            style={{ cursor: 'pointer' }}
                                            padding="0"
                                            onClick={() => dispatch(removeItemCart(shoppingList, item))}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="9" cy="9" r="9" fill="black" />
                                                <path d="M12.21 13L9.27 9.22L12.042 5.636H10.95L8.738 8.52L6.526 5.636H5.406L8.178 9.22L5.266 13H6.386L8.738 9.92L11.076 13H12.21Z" fill="white" />
                                            </svg>
                                        </Button>
                                    )
                                }
                            </ListItemRemove>
                        </ListItemMain>
                    )
                })}
            </ListContent>



            <ListFinalCart>
                <Title
                    titulo="Total:"
                    fontWeight="800" fontSize="28px" lineHeight="15px"
                    smFontWeight="800" smfontSize="28px" smLineHeight="15px"
                />
                <Title
                    titulo="R$ 350"
                    fontWeight="800" fontSize="28px" lineHeight="15px"
                    smFontWeight="800" smfontSize="28px" smLineHeight="15px"
                />
            </ListFinalCart>

            <ListFinalButton>
                <Button
                    width="100%" height="97px"
                    background="#000000" color="#FFFFFF" borderWidth="0"
                    justifyContent="center"
                    fontWeight="800" fontSize="28px" lineHeight="15px"
                    style={{ cursor: 'pointer' }}

                    smHeight="65.86px" smFontSize="20px" smFontWeight="700" smLineHeight="15px"
                >
                    Finalizar compra
                </Button>
            </ListFinalButton>
        </ListWrapper>
    )
}

export default (ListCart);