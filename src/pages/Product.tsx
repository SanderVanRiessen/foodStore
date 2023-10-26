import React from 'react';
import {ScrollView} from 'react-native';
import {ProductDetail} from '../layout';
import {Pages} from '../types';
import {RouteProp, useRoute} from '@react-navigation/native';

const Product = (): JSX.Element => {
  const {params} = useRoute<RouteProp<Pages, 'ProductDetail'>>();
  return (
    <ScrollView>
      <ProductDetail product={params.product} />
    </ScrollView>
  );
};

export default Product;
