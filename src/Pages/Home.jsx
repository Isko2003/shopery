import React from 'react'
import PageContainer from '../Components/Common/PageContainer';
import FeaturedProducts from '../Components/FeaturedProducts';
import LatestNews from '../Components/LatestNews';
import ClientTestimonials from '../Components/ClientTestimonials';

const Home = () => {
  return (
    <PageContainer>
      <FeaturedProducts />
      <LatestNews />
      <ClientTestimonials />
    </PageContainer>
  )
}

export default Home