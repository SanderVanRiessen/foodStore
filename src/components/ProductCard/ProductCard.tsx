import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {ProductItem} from '../../types';

interface ProductCardProps {
  product: ProductItem;
}
const ProductCard = ({product}: ProductCardProps): JSX.Element => {
  const {name, price} = product;
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://via.placeholder.com/150',
        }}
      />
      {/* <img style={styles.img} src={product.images[0]} alt={product.name} /> */}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </View>
  );
};

export default ProductCard;
