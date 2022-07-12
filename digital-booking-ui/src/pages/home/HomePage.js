import React from 'react';
import Categories from '../../components/home/Categories';
import SearchSection from '../../components/home/SearchSection';
import Products from '../../components/home/Products';

const HomePage = () => {
  return (
    <>
      <SearchSection />
      <Categories />
      <Products />
    </>
  );
};

export default HomePage;
