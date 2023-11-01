import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Button from '../Button/Button';
import {useTranslation} from 'react-i18next';

type CartFooterProps = {
  onClickRed: () => void;
  onClickGreen: () => void;
  onClickBlack: () => void;
};
const CartFooter = ({
  onClickGreen,
  onClickRed,
  onClickBlack,
}: CartFooterProps): JSX.Element => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      {/* <View style={styles.buttonContainer}>
        <Button
          content={t('refresh')}
          backgroundColor="black"
          onClick={onClickBlack}
        />
      </View> */}
      <View style={styles.buttonContainer}>
        <Button
          content={t('clearCart')}
          backgroundColor="red"
          onClick={onClickRed}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          content={t('checkout')}
          backgroundColor="green"
          onClick={onClickGreen}
        />
      </View>
    </View>
  );
};

export default CartFooter;
