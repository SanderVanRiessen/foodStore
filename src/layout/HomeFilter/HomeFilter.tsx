import React from 'react';
import {TouchableOpacity, TextInput, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types';

const HomeFilter = (): JSX.Element => {
  const navigation = useNavigation<StackNavigation>();

  function handlePress() {
    navigation.navigate('Filter');
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} />
      <TouchableOpacity style={styles.filterButton} onPress={handlePress}>
        <Icon name="align-justify" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeFilter;
