import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-evenly',
    height: '100%',
  },
  buttonContainer: {
    width: '45%',
    height: 80,
  },
  modalButtonContainer: {
    height: 50,
    margin: 10,
  },
  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    padding: 20,
  },
});

export default styles;
