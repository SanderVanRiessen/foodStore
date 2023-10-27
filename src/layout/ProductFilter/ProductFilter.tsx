import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import {useCategories} from '../../apicalls/getCategories';
import styles from './styles';
import {Button, CategoryItem} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const ProductFilter = (): JSX.Element => {
  const {data, loading, error} = useCategories();
  const {t} = useTranslation();
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

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error...</Text>;
  }
  const categories = [...data];
  return (
    <View style={styles.container}>
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
