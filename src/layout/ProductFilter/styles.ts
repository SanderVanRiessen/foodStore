import {makeStyles} from '@rneui/themed';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.background,
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
  subText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
  },
  list: {
    height: '91%',
  },
}));

export default useStyles;
