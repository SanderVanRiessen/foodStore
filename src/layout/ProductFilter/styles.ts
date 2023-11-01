import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    margin: 16,
  },
  buttonContainer: {
    margin: 10,
    height: 40,
  },
  loader: {
    flex: 1,
    width: '100%',
    marginTop: 16,
    justifyContent: 'center',
  },
});

export default styles;
