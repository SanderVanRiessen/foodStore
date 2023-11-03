import {makeStyles} from '@rneui/themed';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
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
}));

export default useStyles;
