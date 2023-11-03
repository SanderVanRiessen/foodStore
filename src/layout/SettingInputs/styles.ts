import {makeStyles} from '@rneui/themed';

const useStyles = makeStyles(_ => ({
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
    display: 'flex',
    height: 350,
    width: '100%',
  },
  colorPickerContainer: {
    padding: 16,
  },
  selectDropdown: {
    width: '100%',
  },
}));

export default useStyles;
