import React from 'react';
import {Image as Img, View} from 'react-native';
import styles from './styles';

interface ImageProps {
  url: string;
}

const Image = ({url}: ImageProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Img
        style={styles.image}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

export default Image;
