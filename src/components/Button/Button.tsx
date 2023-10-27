import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconButtonProps = {
  icon: string;
  size: number;
};

interface ButtonProps {
  onClick: () => void;
  content: string | IconButtonProps;
  backgroundColor?: string;
}
const Button = ({
  content,
  onClick,
  backgroundColor = 'black',
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={{...styles.buttonContainer, backgroundColor}}
      onPress={onClick}>
      {typeof content === 'string' ? (
        <Text style={styles.text}>{content}</Text>
      ) : (
        <Icon name={content.icon} size={content.size} color="white" />
      )}
    </TouchableOpacity>
  );
};

export default Button;
