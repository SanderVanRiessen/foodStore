import React from 'react';
import {View, Text} from 'react-native';
import {useProductItems} from '../../apicalls/getProductItems';
import {ProductCard} from '../../components';
import styles from './styles';

const ProductList = (): JSX.Element => {
  const {data, loading, error} = useProductItems();

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error...</Text>;
  }
  return (
    <View style={styles.container}>
      {data.map(item => (
        <ProductCard product={item} />
      ))}
    </View>
  );
};

export default ProductList;
