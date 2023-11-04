import React from 'react';
import {FlatList, StyleProp, Text, TextStyle, View} from 'react-native';
import {BookMarkItem} from '../components';
import {useBookmarks} from '../apicalls/Bookmarks';
import {useNavigation} from '@react-navigation/native';
import {ProductItem, StackNavigation} from '../types';
import {makeStyles} from '@rneui/themed';
import {useTranslation} from 'react-i18next';
import {TFunction} from 'i18next';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  subText: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
  },
}));

const emptyList = (
  t: TFunction,
  error: string | null,
  styles: StyleProp<TextStyle>,
): JSX.Element => (
  <Text style={styles}>
    {error ? t('generalError') : t('noRecommendations')}
  </Text>
);

const Bookmark = (): JSX.Element => {
  const {data, loading, error, refetch} = useBookmarks();
  const navigation = useNavigation<StackNavigation>();
  const styles = useStyles();
  const {t} = useTranslation();

  function goToProductDetail(product: ProductItem) {
    navigation.navigate('ProductDetail', {product});
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <BookMarkItem
            key={item.id}
            description={item.description}
            image={item.images[0]}
            onClick={() => goToProductDetail(item)}
          />
        )}
        refreshing={loading}
        onRefresh={refetch}
        ListEmptyComponent={() => emptyList(t, error, styles.subText)}
      />
    </View>
  );
};

export default Bookmark;
