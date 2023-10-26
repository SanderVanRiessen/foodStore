import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

interface ButtonProps {
  onClick: () => void;
  text: string;
}
const Button = ({text, onClick}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onClick}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
