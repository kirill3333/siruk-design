import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/default"
import Wrapper from "../components/wrapper"
import Header from "../components/header"
import Logo from "../components/logo"
import Menu from "../components/menu"

const MainPage = () => (
    <Layout>
        <Wrapper>
            <Header isBlack>
                <Link to="/">
                    <Logo isBlack />
                </Link>
                <Menu />
            </Header>
        </Wrapper>
    </Layout>
)

export default MainPage
