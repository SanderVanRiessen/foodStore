import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  detailContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  detailTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  descriptionText: {
    fontSize: 17,
    color: '#333',
    textAlign: 'center',
  },
  subDetailText: {
    fontSize: 13,
    color: '#333',
    flexGrow: 1,
    flexBasis: 0,
  },
  subDetailItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  subDetails: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default styles;
