import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {ProductSearch, ProductList} from '../layout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from '@rneui/themed';

const Home = (): JSX.Element => {
  const [filter, setFilter] = useState('');
  const {updateTheme} = useTheme();

  useEffect(() => {
    AsyncStorage.getItem('backgroundColor').then(value => {
      if (value) {
        updateTheme({
          lightColors: {
            background: value,
          },
        });
      }
    });
  }, [updateTheme]);

  return (
    <ScrollView>
      <ProductSearch filter={filter} onChangeFilter={setFilter} />
      <ProductList filter={filter} />
    </ScrollView>
  );
};

export default Home;
