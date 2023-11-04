import React, {useCallback, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useCategories} from '../../apicalls/getCategories';
import {Button, CategoryItem} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import useStyles from './styles';

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
      setSelected(selected.filter(item => item !== name));
    } else {
      setSelected(prev => [...prev, name]);
    }
    AsyncStorage.setItem('categories', JSON.stringify([...selected, name]));
  }

  const categories = [...data];

  if (error) {
    return <Text>{t('generalError')}</Text>;
  }
  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size={30} />
        </View>
      )}
      {categories.map((item, i) => (
        <CategoryItem
          key={i}
          name={item}
          onClick={() => handleSelection(item)}
          isSelected={selected.includes(item)}
        />
      ))}
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
