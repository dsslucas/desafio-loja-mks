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
    smDisplay?: string;
    smFontWeight?: string;
    smFontSize?: string;
    smLineHeight?: string
}

export const SubtitleComponent = styled.p<Props>`
    font-family: 'Montserrat';
    font-style: normal;
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    color: ${props => props.color};
    mix-blend-mode: normal;
    margin-left: ${props => props.marginLeft ? props.marginLeft : '0'};

    @media screen and (max-width: 600px){
        display: ${props => props.smDisplay};
        font-weight: ${props => props.smFontWeight};
        font-size: ${props => props.smFontSize};
        line-height: ${props => props.smLineHeight};
    }
`