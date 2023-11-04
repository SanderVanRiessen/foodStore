import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 'auto',
    border: '1px solid #ddd',
    borderRadius: 4,
    padding: 16,
    margin: 8,
    flexGrow: 1,
    cursor: 'pointer',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    backgroundColor: '#fff',
  },
  img: {
    width: '100%',
    height: 100,
  },
  name: {
    marginTop: 8,
  },
  price: {
    color: '#f60',
    margin: 0,
  },
});

export default styles;
