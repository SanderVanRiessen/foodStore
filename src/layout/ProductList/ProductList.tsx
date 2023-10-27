import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {useProductItems} from '../../apicalls/getProductItems';
import {ProductCard} from '../../components';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

interface ProductListProps {
  filter: string;
}
const ProductList = ({filter}: ProductListProps): JSX.Element => {
  const {data, loading, error} = useProductItems();
  const [categories, setCategories] = React.useState({
    loading: true,
    error: false,
    data: [],
  });

  useFocusEffect(
    useCallback(() => {
      setCategories(prev => ({...prev, loading: true}));
      AsyncStorage.getItem('categories').then(res => {
        if (res) {
          setCategories(prev => ({
            ...prev,
            loading: false,
            data: JSON.parse(res),
          }));
        } else {
          setCategories({error: true, loading: false, data: []});
        }
      });
    }, []),
  );

  const filterdData = data
    .filter(({category}) =>
      categories.data.length > 0
        ? categories.data.some(item => item === category)
        : true,
    )
    .filter(({name}) => name.toLowerCase().match(filter.toLowerCase()));

  if (loading || categories.loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error...</Text>;
  }
  return (
    <View style={styles.container}>
      {filterdData.map((item, i) => (
        <ProductCard key={i} product={item} />
      ))}
    </View>
  );
};

export default ProductList;
