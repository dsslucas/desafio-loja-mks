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
    smBackground?: string;
    smHeight?: string;
    smColor?: string;
}

export const SpanComponent = styled.span<Props>`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    color: ${props => props.color};

    @media screen and (max-width: 600px){
        font-size: ${props => props.smFontSize};
        font-weight: ${props => props.smFontWeight};
        line-height: ${props => props.smLineHeight};
        color: ${props => props.smColor}
    }
`