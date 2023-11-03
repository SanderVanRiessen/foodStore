import React from 'react';
import {View} from 'react-native';
import {ShoppingCart} from '../layout';
import {makeStyles} from '@rneui/themed';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.colors.background,
  },
}));

const Cart = (): JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <ShoppingCart />
    </View>
  );
};

export default Cart;
