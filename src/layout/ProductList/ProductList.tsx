import React, {useCallback} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useProductItems} from '../../apicalls/getProductItems';
import {ProductCard} from '../../components';
import useStyles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

interface ProductListProps {
  filter: string;
}

const ProductList = ({filter}: ProductListProps): JSX.Element => {
  const {data, loading, error} = useProductItems();
  const {t} = useTranslation();
  const styles = useStyles();
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

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size={30} />
        </View>
      )}
      {error && <Text>{t('generalError')}</Text>}
      {filterdData.map((item, i) => (
        <ProductCard key={i} product={item} />
      ))}
    </View>
  );
};

export default ProductList;
