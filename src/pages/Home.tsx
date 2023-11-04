import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {ProductSearch, ProductList} from '../layout';

const Home = (): JSX.Element => {
  const [filter, setFilter] = useState('');

  return (
    <ScrollView>
      <ProductSearch filter={filter} onChangeFilter={setFilter} />
      <ProductList filter={filter} />
    </ScrollView>
  );
};

export default Home;
