import React from 'react';
import {ScrollView} from 'react-native';
import {ProductDetail} from '../layout';
import {Pages} from '../types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {makeStyles} from '@rneui/themed';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.colors.background,
  },
}));

const Product = (): JSX.Element => {
  const {params} = useRoute<RouteProp<Pages, 'ProductDetail'>>();
  const styles = useStyles();
  return (
    <ScrollView style={styles.container}>
      <ProductDetail product={params.product} />
    </ScrollView>
  );
};

export default Product;
