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
  detailText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  priceText: {
    fontSize: 20,
    color: '#333',
  },
  descriptionText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
  },
  subDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  contactText: {
    fontSize: 20,
    color: '#333',
  },
  locationText: {
    fontSize: 20,
    color: '#333',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default styles;
