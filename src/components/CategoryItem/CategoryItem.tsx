import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface CategoryItemProps {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}

const CategoryItem = ({
  name,
  onClick,
  isSelected,
}: CategoryItemProps): JSX.Element => {
  const iconName = isSelected ? 'check-circle' : 'circle-thin';
  return (
    <TouchableOpacity style={styles.container} onPress={() => onClick()}>
      <Icon style={styles.icon} name={iconName} size={30} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
