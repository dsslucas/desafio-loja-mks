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
    size?: string;
    fontWeight?: string;
    lineHeight?: string;
    titleHeader?: string;
    imageWidth?: string;
    marginLeft?: string;
    overflowY?: string;
    bottom?: string;
}

// Card
export const CardComponent = styled.div`
    background-color: #FFFFFF;
    width: 13.598rem;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
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
    width: 65%;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #2C2C2C;
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

export const CardDescriptionPrice = styled.p<Props>`
    font-family: 'Montserrat';
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-style: normal;
    font-weight: ${props => props.fontWeight};
    line-height: ${props => props.lineHeight};
`

export const CardDescriptionItem = styled.p<Props>`
    font-family: 'Montserrat';
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-style: normal;
    font-weight: ${props => props.fontWeight};
    line-height: ${props => props.lineHeight};

    @media screen and (max-width: 600px){
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;
    }
`