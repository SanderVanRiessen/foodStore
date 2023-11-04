import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Image} from '../../components';
import {useProductItemsByCategory} from '../../apicalls/getProductItems';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types';
import {useTranslation} from 'react-i18next';
import {TFunction} from 'i18next';

type CartRecommendationsProps = {
  categories: string[];
};

const emptyList = (t: TFunction, error: string | null): JSX.Element => (
  <Text style={styles.subText}>
    {error ? t('generalError') : t('noRecommendations')}
  </Text>
);

const CartRecommendations = ({
  categories,
}: CartRecommendationsProps): JSX.Element => {
  const navigation = useNavigation<StackNavigation>();
  const {data, error, loading, refetch} = useProductItemsByCategory(categories);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('recommendations')}</Text>
      <FlatList
        horizontal
        style={styles.list}
        data={data}
        refreshing={loading}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetail', {product: item})
            }>
            <Image height={80} width={80} url={item.images[0]} />
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => emptyList(t, error)}
        onRefresh={refetch}
      />
    </View>
  );
};

export default CartRecommendations;
