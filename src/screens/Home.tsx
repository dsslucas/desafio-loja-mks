import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Section from '../components/section/Section'
import { connect } from 'react-redux'
import ListCart from '../components/ListCart'
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
    console.log("NA HOME: ", page.listOpened, page)

    return (
        <MainContainer
            {...page}
            overflowY={page ? "hidden" : "visible"}
            height={page ? '100vh' : 'auto'}
        >
            <Header />
            <Section />
            {page === true && <ListCart />}
            <Footer />            
        </MainContainer>
    )
}

function mapStateToProps(state: any) {
    return { page: state.page }
}

export default connect(mapStateToProps)(Home);