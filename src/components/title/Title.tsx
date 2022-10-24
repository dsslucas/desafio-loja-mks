import React from "react";
import { TitleComponent } from "./Styles";

// const TitleComponent = styled.h1`
//     font-family: 'Montserrat';
//     color: #FFFFFF;
//     font-style: normal;
//     font-weight: 600;
//     font-size: 40px;
//     line-height: 19px;
//     mix-blend-mode: normal;

//     @media screen and (max-width: 600px){
//         font-weight: 600;
//         font-size: 32px;
//         line-height: 19px;
//     }
// `

const Title = (props: any) => {
    return (
        <TitleComponent {...props}>
            {props.titulo}
        </TitleComponent>
    )
}

export default Title