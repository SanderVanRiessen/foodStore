import React from 'react';
import {View, Text} from 'react-native';
import Image from '../Image/Image';
import styles from './styles';
import {CartItem} from '../../types';
import Button from '../Button/Button';

interface CartItemProps {
  cartItem: CartItem;
  onRemove: () => void;
}

const ShoppingCartItem = ({cartItem, onRemove}: CartItemProps): JSX.Element => {
  const {name, price, images} = cartItem.product;
  return (
    <View style={styles.container}>
      <Image width={80} height={60} url={images[0]} />
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>${price}</Text>
        </View>
        <Button
          content={{icon: 'remove', size: 20}}
          backgroundColor="red"
          onClick={onRemove}
        />
      </View>
    </View>
  );
};

export default ShoppingCartItem;
