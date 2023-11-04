import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {ProductItem, StackNavigation} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

interface ProductCardProps {
  product: ProductItem;
}
const ProductCard = ({product}: ProductCardProps): JSX.Element => {
  const navigation = useNavigation<StackNavigation>();
  const {t} = useTranslation();
  const {id, price} = product;

  function goToProductDetail() {
    navigation.navigate('ProductDetail', {product});
  }

  return (
    <TouchableOpacity style={styles.container} onPress={goToProductDetail}>
      <Image
        style={styles.img}
        source={{
          uri: product.images[0],
        }}
      />
      <Text style={styles.name}>{t(`products.${id}.name`)}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
