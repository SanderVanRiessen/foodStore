import React from 'react';
import {TouchableOpacity, TextInput, View} from 'react-native';
import useStyles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types';

interface ProductSearchProps {
  filter: string;
  onChangeFilter: (filter: string) => void;
}
const ProductSearch = ({
  filter,
  onChangeFilter,
}: ProductSearchProps): JSX.Element => {
  const navigation = useNavigation<StackNavigation>();
  const styles = useStyles();

  function handlePress() {
    navigation.navigate('Filter');
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={filter}
        onChange={e => onChangeFilter(e.nativeEvent.text)}
      />
      <TouchableOpacity style={styles.filterButton} onPress={handlePress}>
        <Icon name="align-justify" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductSearch;
