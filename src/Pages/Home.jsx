import React from 'react'
import PageContainer from '../Components/Common/PageContainer';
import FeaturedProducts from '../Components/FeaturedProducts';
import LatestNews from '../Components/LatestNews';

const Home = () => {
  return (
    <PageContainer>
      <FeaturedProducts />
      <LatestNews />
    </PageContainer>
  )
}

export default Home