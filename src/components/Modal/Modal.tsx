import React from 'react';
import {
  Modal as NativeModal,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';

type ModalProps = {
  onDismiss: () => void;
  children: JSX.Element;
};

const Modal = ({onDismiss, children}: ModalProps) => {
  return (
    <NativeModal visible={true} transparent>
      <TouchableWithoutFeedback onPress={() => onDismiss()}>
        <View style={styles.modal}>
          <TouchableWithoutFeedback>
            <View style={styles.modalInner}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </NativeModal>
  );
};

export default Modal;
