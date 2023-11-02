import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

type PanelProps = PropsWithChildren<{
  title: string;
}>;

const Panel = ({title, children}: PanelProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  function toggleItem() {
    setExpanded(!expanded);
  }

  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={toggleItem}>
        <Text style={styles.accordTitle}>{title}</Text>
        <Icon
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={20}
          color="#bbb"
        />
      </TouchableOpacity>
      {expanded && <View style={styles.accordBody}>{children}</View>}
    </View>
  );
};

export default Panel;
