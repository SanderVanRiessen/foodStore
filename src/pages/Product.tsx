import React from 'react';
import {View} from 'react-native';
import {ProductDetail} from '../layout';
import {Pages} from '../types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {makeStyles} from '@rneui/themed';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    height: '100%',
  },
}));

const Product = (): JSX.Element => {
  const {params} = useRoute<RouteProp<Pages, 'ProductDetail'>>();
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <ProductDetail product={params.product} />
    </View>
  );
};

export default Product;
