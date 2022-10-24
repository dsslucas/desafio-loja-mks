import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Section from '../components/section/Section'
import { connect } from 'react-redux'
import ListCart from '../components/listCart/ListCart'
import styled from 'styled-components'

interface Props {
    background: string;
    height: string;
    overflowY: string
}

const MainContainer = styled.div<Props>`
    background-color: ${props => props.background};
    height: ${props => props.height};
    overflow-y: ${props => props.overflowY};
`

const Home = (props: any) => {
    const { page } = props

    return (
        <MainContainer
            {...page.listOpened}
            overflowY={page.listOpened ? "hidden" : "visible"}
            height={page.listOpened === true ? '100vh' : 'auto'}
        >
            <Header />
            <Section />
            {page.listOpened === true && <ListCart />}
            <Footer />            
        </MainContainer>
    )
}

function mapStateToProps(state: any) {
    return { page: state.page }
}

export default connect(mapStateToProps)(Home);