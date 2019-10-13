import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )
//
// export default IndexPage

import Layout from "../components/layout/default"
import Wrapper from "../components/layout/wrapper"
import Header from "../components/layout/header"
import Logo from "../components/logo"

const MainPage = () => (
    <Layout>
        <Wrapper>
            <Header>
                <Link to="/">
                    <Logo />
                </Link>
            </Header>
        </Wrapper>
    </Layout>
)

export default MainPage
