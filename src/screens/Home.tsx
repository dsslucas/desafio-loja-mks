import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Section from '../components/Section'
import { connect, useSelector } from 'react-redux'
import ListCart from '../components/ListCart'

const Home = (props: any) => {
    // Lógica do Redux
    // console.log("DENTRO DA HOME: ", state)

    //const test: any = useSelector((state:any) => state.reducer)

    // Armazena os IDs dos produtos, importante para os componentes seguintes

    // const { state } = props

    // console.log(state)

    // if (Array.isArray(state)) {
    //     state.map((item: any) => {
    //         return console.log("Mapeei ", item.id)
    //     })
    // }



    return (
        <>
            <Header />
            <Section />
            <ListCart />
            <Footer />
        </>
    )
}

// export default Home

// export default Home
function mapStateToProps(state: any) {
    return { state }
}

export default connect(mapStateToProps)(Home);