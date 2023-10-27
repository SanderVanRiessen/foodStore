import React from 'react';
import {Image as Img, View} from 'react-native';
import styles from './styles';

interface ImageProps {
  url: string;
  width: number;
  height: number;
}

const Image = ({url, width, height}: ImageProps): JSX.Element => {
  return (
    <View style={{...styles.container, width, height}}>
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
