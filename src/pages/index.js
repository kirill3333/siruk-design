import React from 'react'


import Layout from '../components/layout/default'
import Wrapper from '../components/wrapper'
import Header from '../components/header'
import ImageSlider from '../components/image-slider'

const MainPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Header isBlack={false} />
        <ImageSlider />
      </Wrapper>
    </Layout>
  )
}

export default MainPage
