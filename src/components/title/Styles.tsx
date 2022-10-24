import styled from "styled-components"

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
    smFontWeight?: string;
    smFontSize?: string;
    smLineHeight?: string;
    smWidth?: string;
    smTextAlign?: string
}

export const TitleComponent = styled.h1<Props>`
    font-family: 'Montserrat';
    color: ${props => props.color ? props.color : '#FFFFFF'};
    font-style: normal;
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    mix-blend-mode: ${props => props.titleHeader ? 'normal' : 'none'};
    width: ${props => props.width ? props.width : 'auto'};

    @media screen and (max-width: 600px){
        font-weight: ${props => props.smFontWeight};
        font-size: ${props => props.smFontSize};
        line-height: ${props => props.smLineHeight};
        width: ${props => props.smWidth};
        text-align: ${props => props.smTextAlign}
    }
`