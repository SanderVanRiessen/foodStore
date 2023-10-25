import React from 'react';
import {ScrollView} from 'react-native';
import {HomeFilter, ProductList} from '../layout';

const Home = (): JSX.Element => {
  return (
    <ScrollView>
      <HomeFilter />
      <ProductList />
    </ScrollView>
  );
};

export default Home;
