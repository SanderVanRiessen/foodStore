import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 16,
  },
  colorPicker: {
    backgroundColor: 'black',
  },
  selectDropdown: {
    width: '100%',
  },
});

export default styles;
