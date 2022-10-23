import React from "react";
import styled from 'styled-components';
import Button from "./Button";
import Image from "./Image";
import Span from "./Span";
import { SpanComponent } from "./Styles";
import Subtitle from "./Subtitle";
import Title from "./Title";

const ListWrapper = styled.div`
    background-color: #0F52BA;
    width: 486px;
    position: absolute;
    right: 0;
    height: 100vh;
    align-items: flex-start;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`

const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 47px;
    margin-right: 22px;
    margin-top: 36px;
    margin-bottom: 18px;
`

const ListContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 18px;
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
    margin-bottom: 28px
`

const ListItemRemove = styled.div`
    display: flex;
    position: relative;
    align-items: baseline;

    right: -20px;
    height: 115px;
    z-index: 25;

`

const ListItemQtd = styled.div`

`

const ListItemQtdButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 19px;
    width: 50px;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;
`

const ListFinalCart = styled.div`
    background-color: #0F52BA;
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: space-around;
    align-items: center;
`

const ListCart = (props: any) => {
    return (
        <ListWrapper>
            <ListHeader>
                <Title
                    titulo="Carrinho de compras"
                    fontWeight="700" size="27px" lineHeight="33px"
                    width="40%"
                />

                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="19" cy="19" r="19" fill="black" />
                    <path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white" />
                </svg>
            </ListHeader>

            <ListContent>
                <ListItemMain>
                    <Image width="90px" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp" />

                    <Title
                        titulo="Apple Watch Series 4 GPS"
                        fontWeight="600" size="13px" lineHeight="17px" color="#2C2C2C"
                        width="30%"
                    />

                    <ListItemQtd>
                        <Subtitle subtitulo="Qtd"
                            color="#000000"
                            fontWeight="600" size="5px" lineHeight="6px"
                        />
                        <ListItemQtdButtons>
                            <Button
                                color="#000000"
                                border-width="0px" borderWidth="0" justifyContent="justify-content"
                                size="12px"
                                background="transparent"
                                style={{ cursor: 'pointer' }}
                                fontWeight="600"
                            >
                                -
                            </Button>
                            <Span
                                number={1}
                                fontWeight="600" size="8px" lineHeight="10px" color="#000000"
                            />
                            <Button
                                color="#000000"
                                border-width="0px" borderWidth="0" justifyContent="justify-content"
                                size="12px"
                                background="transparent"
                                style={{ cursor: 'pointer' }}
                                fontWeight="600"
                            >
                                +
                            </Button>
                        </ListItemQtdButtons>
                    </ListItemQtd>

                    <Span
                        number="R$399"
                        fontWeight="800" size="14px" lineHeight="17px" color="#000000"
                    />
                    <ListItemRemove>
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
                    </ListItemRemove>
                </ListItemMain>

                <ListItemMain>
                    <Image width="90px" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp" />

                    <Title
                        titulo="Apple Watch Series 4 GPS"
                        fontWeight="600" size="13px" lineHeight="17px" color="#2C2C2C"
                        width="30%"
                    />

                    <ListItemQtd>
                        <Subtitle subtitulo="Qtd"
                            color="#000000"
                            fontWeight="600" size="5px" lineHeight="6px"
                        />
                        <ListItemQtdButtons>
                            <Button
                                color="#000000"
                                border-width="0px" borderWidth="0" justifyContent="justify-content"
                                size="12px"
                                background="transparent"
                                style={{ cursor: 'pointer' }}
                                fontWeight="600"
                            >
                                -
                            </Button>
                            <Span
                                number={1}
                                fontWeight="600" size="8px" lineHeight="10px" color="#000000"
                            />
                            <Button
                                color="#000000"
                                border-width="0px" borderWidth="0" justifyContent="justify-content"
                                size="12px"
                                background="transparent"
                                style={{ cursor: 'pointer' }}
                                fontWeight="600"
                            >
                                +
                            </Button>
                        </ListItemQtdButtons>
                    </ListItemQtd>

                    <Span
                        number="R$399"
                        fontWeight="800" size="14px" lineHeight="17px" color="#000000"
                    />
                    <ListItemRemove>
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
                    </ListItemRemove>
                </ListItemMain>

                <ListItemMain>
                    <Image width="90px" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp" />

                    <Title
                        titulo="Apple Watch Series 4 GPS"
                        fontWeight="600" size="13px" lineHeight="17px" color="#2C2C2C"
                        width="30%"
                    />

                    <ListItemQtd>
                        <Subtitle subtitulo="Qtd"
                            color="#000000"
                            fontWeight="600" size="5px" lineHeight="6px"
                        />
                        <ListItemQtdButtons>
                            <Button
                                color="#000000"
                                border-width="0px" borderWidth="0" justifyContent="justify-content"
                                size="12px"
                                background="transparent"
                                style={{ cursor: 'pointer' }}
                                fontWeight="600"
                            >
                                -
                            </Button>
                            <Span
                                number={1}
                                fontWeight="600" size="8px" lineHeight="10px" color="#000000"
                            />
                            <Button
                                color="#000000"
                                border-width="0px" borderWidth="0" justifyContent="justify-content"
                                size="12px"
                                background="transparent"
                                style={{ cursor: 'pointer' }}
                                fontWeight="600"
                            >
                                +
                            </Button>
                        </ListItemQtdButtons>
                    </ListItemQtd>

                    <Span
                        number="R$399"
                        fontWeight="800" size="14px" lineHeight="17px" color="#000000"
                    />
                    <ListItemRemove>
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
                    </ListItemRemove>
                </ListItemMain>

                <ListItemMain>
                    <Image width="90px" src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp" />

                    <Title
                        titulo="Apple Watch Series 4 GPS"
                        fontWeight="600" size="13px" lineHeight="17px" color="#2C2C2C"
                        width="30%"
                    />

                    <ListItemQtd>
                        <Subtitle subtitulo="Qtd"
                            color="#000000"
                            fontWeight="600" size="5px" lineHeight="6px"
                        />
                        <ListItemQtdButtons>
                            <Button
                                color="#000000"
                                border-width="0px" borderWidth="0" justifyContent="justify-content"
                                size="12px"
                                background="transparent"
                                style={{ cursor: 'pointer' }}
                                fontWeight="600"
                            >
                                -
                            </Button>
                            <Span
                                number={1}
                                fontWeight="600" size="8px" lineHeight="10px" color="#000000"
                            />
                            <Button
                                color="#000000"
                                border-width="0px" borderWidth="0" justifyContent="justify-content"
                                size="12px"
                                background="transparent"
                                style={{ cursor: 'pointer' }}
                                fontWeight="600"
                            >
                                +
                            </Button>
                        </ListItemQtdButtons>
                    </ListItemQtd>

                    <Span
                        number="R$399"
                        fontWeight="800" size="14px" lineHeight="17px" color="#000000"
                    />
                    <ListItemRemove>
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
                    </ListItemRemove>
                </ListItemMain>
            </ListContent>

            <ListFinalCart>
                <Title titulo="Valor" />
                <Title titulo="R$ 350" />
            </ListFinalCart>

            <Button
                width="100%" height="97px"
                background="#000000" color="#FFFFFF"
                justifyContent="center"
                fontWeight="700" size="28px" lineHeight="15px"
                style={{ cursor: 'pointer' }}

            >
                Finalizar compra
            </Button>

        </ListWrapper>
    )
}

export default ListCart