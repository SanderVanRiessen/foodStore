import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {ProductItem, StackNavigation} from '../../types';
import {useNavigation} from '@react-navigation/native';

interface ProductCardProps {
  product: ProductItem;
}
const ProductCard = ({product}: ProductCardProps): JSX.Element => {
  const navigation = useNavigation<StackNavigation>();
  const {name, price} = product;

  function goToProductDetail() {
    navigation.navigate('ProductDetail', {product});
  }

  return (
    <TouchableOpacity style={styles.container} onPress={goToProductDetail}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://via.placeholder.com/150',
        }}
      />
      {/* <img style={styles.img} src={product.images[0]} alt={product.name} /> */}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;