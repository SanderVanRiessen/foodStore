import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ShoppingCartItem} from '../../components';
import {deleteCartItem, useCart} from '../../apicalls/Cart';
import styles from './styles';

const ShoppingCart = (): JSX.Element => {
  const {data, loading, error, refetch} = useCart();

  function handleRemoveItem(id: number): void {
    deleteCartItem(id).finally(() => refetch());
  }

  if (error) {
    return <Text>Error...</Text>;
  }
  return (
    <View style={styles.container}>
      {data.length === 0 && <Text>Cart is empty</Text>}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ShoppingCartItem
            key={item.id}
            cartItem={item}
            onRemove={() => handleRemoveItem(item.id)}
          />
        )}
        refreshing={loading}
        onRefresh={refetch}
      />
    </View>
  );
};

export default ShoppingCart;
