import styled from "styled-components";

export const ListWrapper = styled.div`
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

export const ListHeader = styled.div`
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

export const ListContent = styled.div`
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

export const ListItemMain = styled.div`
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

export const ListItemRemove = styled.div`
    display: flex;
    position: relative;
    align-items: baseline;

    right: -15px;
    height: 115px;    

    @media screen and (max-width: 600px){
        height: 0px;
        left: 100px
    }
`

export const ListItemQtd = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media screen and (max-width: 600px){
        display: flex;
        width: 50%;
        flex-direction: column
    }
`

export const ListItemQtdButtons = styled.div`
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

export const ListItemPrice = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    @media screen and (max-width: 600px){
        background-color: #373737;
        height: 34.81px;
        width: 84px;
        align-items: center;
        justify-content: center;
        border-radius: 5px
    }
`

export const ListDividerQtdSpan = styled.div`
    display: flex;
    align-items: center;
    width: 35%;
    @media screen and (max-width: 600px){
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 34.81px;
    }
`

export const ListFinalCart = styled.div`
    display: flex;
    width: 100%;
    height: 97px;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 600px){
        height: 65.86px;
    }
`

export const ListFinalButton = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 600px){
        height: 65.86px;
    }
`