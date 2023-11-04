import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {BookMarkItem} from '../components';
import {useBookmarks} from '../apicalls/Bookmarks';
import {useNavigation} from '@react-navigation/native';
import {ProductItem, StackNavigation} from '../types';
import {makeStyles} from '@rneui/themed';
import {useTranslation} from 'react-i18next';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  notFound: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
  },
}));

const Bookmark = (): JSX.Element => {
  const {data, loading, error, refetch} = useBookmarks();
  const navigation = useNavigation<StackNavigation>();
  const styles = useStyles();
  const {t} = useTranslation();

  function goToProductDetail(product: ProductItem) {
    navigation.navigate('ProductDetail', {product});
  }

  if (error) {
    return <Text>{t('generalError')}</Text>;
  }
  return (
    <View style={styles.container}>
      {data.length === 0 && !loading && (
        <Text style={styles.notFound}>{t('noBookMarksFound')}</Text>
      )}
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
      />
    </View>
  );
};

export default Bookmark;
