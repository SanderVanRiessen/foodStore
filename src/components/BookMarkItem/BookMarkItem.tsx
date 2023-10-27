import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Image from '../Image/Image';
import styles from './styles';

interface BookMarkItemProps {
  description: string;
  image: string;
  onClick: () => void;
}

const BookMarkItem = ({
  description,
  image,
  onClick,
}: BookMarkItemProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Image width={100} height={80} url={image} />
      <Text style={styles.text}>{description}</Text>
    </TouchableOpacity>
  );
};

export default BookMarkItem;
