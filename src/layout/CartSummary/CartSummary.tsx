import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {SubDetailItem} from '../../components';

type CartSummaryProps = {
  totalPrice: number;
};
const CartSummary = ({totalPrice}: CartSummaryProps): JSX.Element => {
  const {t} = useTranslation();
  const deliveryTime = new Date(Date.now() + 30 * 60 * 1000);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('cart')}</Text>
      <View>
        <SubDetailItem label={t('totalPrice')} value={`$${totalPrice}`} />
        <SubDetailItem
          label={t('deliveryTime')}
          value={deliveryTime.toLocaleTimeString()}
        />
      </View>
    </View>
  );
};

export default CartSummary;
