import styled from "styled-components";

// Button
interface Props {
    justifyContent?: string;
    background?: string;
    color?: string;
    width?: string;
    height?: string;
    padding?: string;
    margin?: string;
    borderLeftRightBottom?: string;
    borderColor?: string;
    borderWidth?: string;
    borderRadius?: string;
    backgroundHover?: string;
    borderColorHover?: string;
    size?: string
}

export const ButtonComponent = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent};
    background-color: ${props => props.background};
    color: ${props => props.color};
    width: ${props => props.width};
    height: ${props => props.height};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    border-bottom-left-radius: ${props => props.borderLeftRightBottom};
    border-bottom-right-radius: ${props => props.borderLeftRightBottom};
    border-color: ${props => props.borderColor};
    border-width: ${props => props.borderWidth};
    border-radius: ${props => props.borderRadius};
    &:hover{
        background-color: ${props => props.backgroundHover};
        border-color: ${props => props.borderColorHover}
    }
`

// Span
export const SpanComponent = styled.span`
    font-size: 1.125rem;
    font-weight: bold;
`
// 
// Card
export const CardComponent = styled.div`
    background-color: #FFFFFF;
    width: 13.598rem;
    border-radius: 0.5rem;

    @media screen and (max-width: 600px){
        width: 15.656rem;
    }
`

export const CardMainContent = styled.div`
    padding: 0.875rem;
    padding-bottom: 0;
`

export const CardImage = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 0.875rem; 
    height: 130px;
`

export const CardTitleAndPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    height: 40px
`

export const CardTitle = styled.h4`
    color: #2C2C2C;
    width: 65%;
    margin: 0;
    padding: 0;
`

export const CardPrice = styled.span`
    background-color: #373737;
    color: #FFFFFF;
    border-radius: 0.5rem;
    font-size: 0.938rem;
    width: 4rem;
    height: 1.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardTextProduct = styled.div`
    height: 60px;
    padding-bottom: 10px
`

export const CardDescription = styled.p<Props>`
    color: ${props => props.color};
    font-size: ${props => props.size};
`

// Imagem
export const ImageComponent = styled.img`
    width: fit-content
`