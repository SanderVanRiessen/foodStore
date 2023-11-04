import React, {useCallback, useState} from 'react';
import {FlatList, StyleProp, Text, TextStyle, View} from 'react-native';
import {useCategories} from '../../apicalls/getCategories';
import {Button, CategoryItem} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import useStyles from './styles';
import {TFunction} from 'i18next';

const emptyList = (
  t: TFunction,
  error: string | null,
  styles: StyleProp<TextStyle>,
): JSX.Element => (
  <Text style={styles}>
    {error ? t('generalError') : t('noCategoriesFound')}
  </Text>
);

const ProductFilter = (): JSX.Element => {
  const {data, loading, error} = useCategories();
  const {t} = useTranslation();
  const styles = useStyles();
  const [selected, setSelected] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('categories').then(res => {
        if (res) {
          setSelected(JSON.parse(res));
        } else {
          setSelected([]);
        }
      });
    }, []),
  );

  function handleSelection(name: string): void {
    if (selected.includes(name)) {
      const selection = selected.filter(item => item !== name);
      setSelected(selection);
      AsyncStorage.setItem('categories', JSON.stringify(selection));
    } else {
      setSelected(prev => [...prev, name]);
      AsyncStorage.setItem('categories', JSON.stringify([...selected, name]));
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={[...data]}
        refreshing={loading}
        renderItem={({item}) => (
          <CategoryItem
            name={t(`categories.${item.toLocaleLowerCase()}`)}
            onClick={() => handleSelection(item)}
            isSelected={selected.includes(item)}
          />
        )}
        ListEmptyComponent={() => emptyList(t, error, styles.subText)}
      />
      <View style={styles.buttonContainer}>
        <Button
          content={t('cancelFilter')}
          onClick={() => {
            AsyncStorage.removeItem('categories');
            setSelected([]);
          }}
        />
      </View>
    </View>
  );
};

export default ProductFilter;
