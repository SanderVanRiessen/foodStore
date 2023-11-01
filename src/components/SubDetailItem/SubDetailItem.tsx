import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
type ProductDetailProps = {
  label: string;
  value: string;
};

const SubDetailItem = ({label, value}: ProductDetailProps): JSX.Element => (
  <View style={styles.subDetailItem}>
    <Text style={styles.subDetailText}>{label}</Text>
    <Text style={styles.subDetailText}>{value}</Text>
  </View>
);

export default SubDetailItem;
