import React, { useRef } from "react";
import { connect, useDispatch } from "react-redux";
import styled from 'styled-components';
import { buttonListCart } from "../redux/actions/Page";
import Button from "./button/Button";
import Image from "./image/Image";
import Span from "./span/Span";
import Subtitle from "./subtitle/Subtitle";
import Title from "./title/Title";

const ListWrapper = styled.div`
    background-color: #0F52BA;
    width: 486px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    align-items: flex-start;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    z-index: 1;

    @media screen and (max-width: 600px){
        width: 330px;
        flex-wrap: wrap;
    }
`

const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 47px;
    padding-right: 22px;
    padding-top: 36px;
    padding-bottom: 18px;

    @media screen and (max-width: 600px){
        padding-top: 25px;
        padding-left: 32px;
        padding-right: 15.08px;
    }
`

const ListContent = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: visible;
    overflow-x: hidden;
    padding-top: 18px;
    height: calc(100vh - 368px);

    @media screen and (max-width: 600px){
        height: calc(100vh - 295px);
    }
`

const ListItemMain = styled.div`
    background: #FFFFFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin-left: 47px;
    margin-right: 60px;
    display: flex;
    width: 379px;
    height: 95px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;    
    margin-bottom: 28px;

    @media screen and (max-width: 600px){
        width: 250px;
        height: 220.05px;
        flex-direction: column;
        padding-top: 10px;
        padding-bottom: 10px
    }
`

const ListItemRemove = styled.div`
    display: flex;
    position: relative;
    align-items: baseline;

    right: -20px;
    height: 115px;
    

    @media screen and (max-width: 600px){
        background: green;
        height: 0px;
        left: 100px
    }
`

const ListItemQtd = styled.div`
    @media screen and (max-width: 600px){
        display: flex;
        width: 50%;
        flex-direction: column
    }
`

const ListItemQtdButtons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 19px;
    width: 50px;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;

    @media screen and (max-width: 600px){
        height: 34.5px;
        width: 97.37px;
    }
`

const ListItemPrice = styled.div`
    @media screen and (max-width: 600px){
        display: flex;
        background-color: #373737;
        height: 34.81px;
        width: 84px;
        align-items: center;
        justify-content: center;
        border-radius: 5px
    }
`

const ListDividerQtdSpan = styled.div`
    @media screen and (max-width: 600px){
        background: yellow;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 34.81px;
    }
`

// background-color: #0F52BA;
const ListFinalCart = styled.div`
    display: flex;
    width: 100%;
    height: 97px;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 600px){
        height: 65.86px;
        background: purple
    }
    
`

const ListFinalButton = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 600px){
        height: 65.86px;
    }

`

const ListCart = (props: any) => {
    // Conexão com o Redux
    const dispatch = useDispatch()

    const { state } = props
    console.log("NA LISTA: ", state)

    // Necessário para renderização do icone de exclusão
    const width = window.innerWidth

    return (
        <ListWrapper >
            <ListHeader>
                <Title
                    titulo="Carrinho de compras"
                    fontWeight="700" fontSize="27px" lineHeight="33px" width="40%"
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
                <ListItemMain>
                    {width <= 600 && (
                        <ListItemRemove>
                            <Button
                                color="transparent"
                                border-width="0px" borderWidth="0" justifyContent="justify-content"
                                background="transparent"
                                style={{ cursor: 'pointer' }}
                                padding="0"
                            >
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.63 22.8113L12.81 11.4713L21.126 0.719309H17.85L11.214 9.37131L4.578 0.719309H1.218L9.534 11.4713L0.798 22.8113H4.158L11.214 13.5713L18.228 22.8113H21.63Z" fill="black" />
                                </svg>

                            </Button>
                        </ListItemRemove>
                    )}

                    <Image
                        width="90px" smWidth="110px" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp" />

                    <Title
                        titulo="Apple Watch Series 4 GPS"
                        fontWeight="600" fontSize="13px" lineHeight="17px" color="#2C2C2C"
                        width="30%"

                        smFontWeight="400" smfontSize="16px" smLineHeight="19px" smWidth="211px" smTextAlign="center"
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
                                    border-width="0px" borderWidth="0" justifyContent="justify-content"
                                    size="12px"
                                    background="transparent"
                                    style={{ cursor: 'pointer' }}
                                    fontWeight="600"

                                    smFontSize="24px" smFontWeight="400" smLineHeight="29.26px"
                                >
                                    -
                                </Button>
                                <Span
                                    number={1}
                                    fontWeight="600" size="8px" lineHeight="10px" color="#000000"

                                    smFontSize="20px" smFontWeight="400px" smLineHeight="24.38px"
                                />
                                <Button
                                    color="#000000"
                                    border-width="0px" borderWidth="0" justifyContent="justify-content"
                                    size="12px"
                                    background="transparent"
                                    style={{ cursor: 'pointer' }}
                                    fontWeight="600"

                                    smFontSize="24px" smFontWeight="400" smLineHeight="29.26px"
                                >
                                    +
                                </Button>
                            </ListItemQtdButtons>
                        </ListItemQtd>

                        <ListItemPrice>
                            <Span
                                number="R$399"
                                fontWeight="800" size="14px" lineHeight="17px" color="#000000"

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

                <ListItemMain>
                    {width <= 600 && (
                        <ListItemRemove>
                            <Button
                                color="transparent"
                                border-width="0px" borderWidth="0" justifyContent="justify-content"
                                background="transparent"
                                style={{ cursor: 'pointer' }}
                                padding="0"
                            >
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.63 22.8113L12.81 11.4713L21.126 0.719309H17.85L11.214 9.37131L4.578 0.719309H1.218L9.534 11.4713L0.798 22.8113H4.158L11.214 13.5713L18.228 22.8113H21.63Z" fill="black" />
                                </svg>

                            </Button>
                        </ListItemRemove>
                    )}

                    <Image
                        width="90px" smWidth="110px" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp" />

                    <Title
                        titulo="Apple Watch Series 4 GPS"
                        fontWeight="600" fontSize="13px" lineHeight="17px" color="#2C2C2C"
                        width="30%"

                        smFontWeight="400" smfontSize="16px" smLineHeight="19px" smWidth="211px" smTextAlign="center"
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
                                    border-width="0px" borderWidth="0" justifyContent="justify-content"
                                    size="12px"
                                    background="transparent"
                                    style={{ cursor: 'pointer' }}
                                    fontWeight="600"

                                    smFontSize="24px" smFontWeight="400" smLineHeight="29.26px"
                                >
                                    -
                                </Button>
                                <Span
                                    number={1}
                                    fontWeight="600" size="8px" lineHeight="10px" color="#000000"

                                    smFontSize="20px" smFontWeight="400px" smLineHeight="24.38px"
                                />
                                <Button
                                    color="#000000"
                                    border-width="0px" borderWidth="0" justifyContent="justify-content"
                                    size="12px"
                                    background="transparent"
                                    style={{ cursor: 'pointer' }}
                                    fontWeight="600"

                                    smFontSize="24px" smFontWeight="400" smLineHeight="29.26px"
                                >
                                    +
                                </Button>
                            </ListItemQtdButtons>
                        </ListItemQtd>

                        <ListItemPrice>
                            <Span
                                number="R$399"
                                fontWeight="800" size="14px" lineHeight="17px" color="#000000"

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

                <ListItemMain>
                    {width <= 600 && (
                        <ListItemRemove>
                            <Button
                                color="transparent"
                                border-width="0px" borderWidth="0" justifyContent="justify-content"
                                background="transparent"
                                style={{ cursor: 'pointer' }}
                                padding="0"
                            >
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.63 22.8113L12.81 11.4713L21.126 0.719309H17.85L11.214 9.37131L4.578 0.719309H1.218L9.534 11.4713L0.798 22.8113H4.158L11.214 13.5713L18.228 22.8113H21.63Z" fill="black" />
                                </svg>

                            </Button>
                        </ListItemRemove>
                    )}

                    <Image
                        width="90px" smWidth="110px" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp" />

                    <Title
                        titulo="Apple Watch Series 4 GPS"
                        fontWeight="600" fontSize="13px" lineHeight="17px" color="#2C2C2C"
                        width="30%"

                        smFontWeight="400" smfontSize="16px" smLineHeight="19px" smWidth="211px" smTextAlign="center"
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
                                    border-width="0px" borderWidth="0" justifyContent="justify-content"
                                    size="12px"
                                    background="transparent"
                                    style={{ cursor: 'pointer' }}
                                    fontWeight="600"

                                    smFontSize="24px" smFontWeight="400" smLineHeight="29.26px"
                                >
                                    -
                                </Button>
                                <Span
                                    number={1}
                                    fontWeight="600" size="8px" lineHeight="10px" color="#000000"

                                    smFontSize="20px" smFontWeight="400px" smLineHeight="24.38px"
                                />
                                <Button
                                    color="#000000"
                                    border-width="0px" borderWidth="0" justifyContent="justify-content"
                                    size="12px"
                                    background="transparent"
                                    style={{ cursor: 'pointer' }}
                                    fontWeight="600"

                                    smFontSize="24px" smFontWeight="400" smLineHeight="29.26px"
                                >
                                    +
                                </Button>
                            </ListItemQtdButtons>
                        </ListItemQtd>

                        <ListItemPrice>
                            <Span
                                number="R$399"
                                fontWeight="800" size="14px" lineHeight="17px" color="#000000"

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

                <ListItemMain>
                    {width <= 600 && (
                        <ListItemRemove>
                            <Button
                                color="transparent"
                                border-width="0px" borderWidth="0" justifyContent="justify-content"
                                background="transparent"
                                style={{ cursor: 'pointer' }}
                                padding="0"
                            >
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.63 22.8113L12.81 11.4713L21.126 0.719309H17.85L11.214 9.37131L4.578 0.719309H1.218L9.534 11.4713L0.798 22.8113H4.158L11.214 13.5713L18.228 22.8113H21.63Z" fill="black" />
                                </svg>

                            </Button>
                        </ListItemRemove>
                    )}

                    <Image
                        width="90px" smWidth="110px" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp" />

                    <Title
                        titulo="Apple Watch Series 4 GPS"
                        fontWeight="600" fontSize="13px" lineHeight="17px" color="#2C2C2C"
                        width="30%"

                        smFontWeight="400" smfontSize="16px" smLineHeight="19px" smWidth="211px" smTextAlign="center"
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
                                    border-width="0px" borderWidth="0" justifyContent="justify-content"
                                    size="12px"
                                    background="transparent"
                                    style={{ cursor: 'pointer' }}
                                    fontWeight="600"

                                    smFontSize="24px" smFontWeight="400" smLineHeight="29.26px"
                                >
                                    -
                                </Button>
                                <Span
                                    number={1}
                                    fontWeight="600" size="8px" lineHeight="10px" color="#000000"

                                    smFontSize="20px" smFontWeight="400px" smLineHeight="24.38px"
                                />
                                <Button
                                    color="#000000"
                                    border-width="0px" borderWidth="0" justifyContent="justify-content"
                                    size="12px"
                                    background="transparent"
                                    style={{ cursor: 'pointer' }}
                                    fontWeight="600"

                                    smFontSize="24px" smFontWeight="400" smLineHeight="29.26px"
                                >
                                    +
                                </Button>
                            </ListItemQtdButtons>
                        </ListItemQtd>

                        <ListItemPrice>
                            <Span
                                number="R$399"
                                fontWeight="800" size="14px" lineHeight="17px" color="#000000"

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

            </ListContent>

            <ListFinalCart>
                <Title titulo="Valor" />
                <Title titulo="R$ 350" />
            </ListFinalCart>

            <ListFinalButton>

                <Button
                    width="100%" height="97px"
                    background="#000000" color="#FFFFFF" borderWidth="0"
                    justifyContent="center"
                    fontWeight="700" size="28px" lineHeight="15px"
                    style={{ cursor: 'pointer' }}
                    
                    smHeight="65.86px" smFontSize="20px" smFontWeight="700" smLineHeight="15px"
                >
                    Finalizar compra
                </Button>
            </ListFinalButton>


        </ListWrapper>
    )
}

// export default ListCart

// export default Home
function mapStateToProps(state: any) {
    return { state }
}

export default connect(mapStateToProps)(ListCart);