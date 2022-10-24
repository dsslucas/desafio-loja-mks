import styled from "styled-components";

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
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    titleHeader?: string;
    imageWidth?: string;
    marginLeft?: string;
    overflowY?: string;
    bottom?: string;

    // Responsive
    smFontSize?: string;
    smFontWeight?: string;
    smLineHeight?: string;
    smHeight?: string;
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
    bottom: ${props => props.bottom};

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    &:hover{
        background-color: ${props => props.backgroundHover};
        border-color: ${props => props.borderColorHover};
    }

    @media screen and (max-width: 600px){
        height: ${props => props.smHeight};
        font-size: ${props => props.smFontSize};
        font-weight: ${props => props.smFontWeight};
        line-height: ${props => props.smLineHeight};
    }
`