import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  textContainer: {
    marginRight: 10,
    flexShrink: 1,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 1,
    width: '100%',
    marginVertical: 20,
    marginRight: 10,
  },
  text: {},
});

export default styles;
