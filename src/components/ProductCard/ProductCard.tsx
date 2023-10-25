import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {ProductItem} from '../../types';

interface ProductCardProps {
  product: ProductItem;
}
const ProductCard = ({product}: ProductCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://via.placeholder.com/150',
        }}
      />
      {/* <img style={styles.img} src={product.images[0]} alt={product.name} /> */}
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  );
};

export default ProductCard;
