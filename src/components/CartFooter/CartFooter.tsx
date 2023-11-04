import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Button from '../Button/Button';
import {useTranslation} from 'react-i18next';
import Modal from '../Modal/Modal';
import {Text} from 'react-native';

type CartFooterProps = {
  onClick: () => void;
};

const CartFooter = ({onClick}: CartFooterProps): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const {t} = useTranslation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            content={t('clearCart')}
            backgroundColor="red"
            onClick={onClick}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            content={t('checkout')}
            backgroundColor="green"
            onClick={() => setShowModal(true)}
          />
        </View>
      </View>
      {showModal && (
        <Modal onDismiss={() => setShowModal(false)}>
          <View style={styles.modalContainer}>
            <Text>{t('confirmPurchase')}</Text>
            <View style={styles.container}>
              <View style={styles.modalButtonContainer}>
                <Button
                  content={t('cancel')}
                  backgroundColor="red"
                  onClick={() => setShowModal(false)}
                />
              </View>
              <View style={styles.modalButtonContainer}>
                <Button
                  content={t('confirm')}
                  backgroundColor="green"
                  onClick={() => {
                    setShowModal(false);
                    onClick();
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default CartFooter;
