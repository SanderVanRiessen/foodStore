import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {CartFooter, ShoppingCartItem} from '../../components';
import {deleteCartItem, useCart} from '../../apicalls/Cart';
import styles from './styles';
import CartSummary from '../CartSummary/CartSummary';
import CartRecommendations from '../CartRecommendations/CartRecommendations';
import {useTranslation} from 'react-i18next';
import {TFunction} from 'i18next';

const emptyList = (t: TFunction, error: null | string): JSX.Element => (
  <Text style={styles.subText}>
    {error ? t('generalError') : t('CartEmpty')}
  </Text>
);

const ShoppingCart = (): JSX.Element => {
  const {data, loading, error, refetch} = useCart();
  const {t} = useTranslation();

  const categories = data && data.map(item => item.product.category);
  const total = data && data.reduce((acc, item) => acc + item.product.price, 0);

  function handleClearCart(ids: number[]): void {
    const bulkRemove = Promise.all(ids.map(id => deleteCartItem(id)));
    bulkRemove.finally(() => refetch());
  }

  function handleRemoveItem(id: number): void {
    deleteCartItem(id).finally(() => refetch());
  }

  return (
    <>
      <View style={styles.container}>
        <CartSummary totalPrice={total} />
        <FlatList
          style={styles.list}
          data={data}
          renderItem={({item}) => (
            <ShoppingCartItem
              key={item.id}
              cartItem={item}
              onRemove={() => handleRemoveItem(item.id)}
            />
          )}
          ListEmptyComponent={() => emptyList(t, error)}
          keyExtractor={(_, index) => index.toString()}
          refreshing={loading}
          onRefresh={refetch}
        />
      </View>
      <CartRecommendations categories={categories} />
      <CartFooter
        onClick={() => {
          const ids = data && data.map(item => item.id);
          handleClearCart(ids);
        }}
      />
    </>
  );
};

export default ShoppingCart;
