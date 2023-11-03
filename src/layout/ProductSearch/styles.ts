import {makeStyles} from '@rneui/themed';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.background,
  },
  searchInput: {
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    fontSize: 18,
    width: '78%',
  },
  filterButton: {
    backgroundColor: theme.colors.background,
    padding: 10,
    margin: 10,
    fontSize: 18,
  },
}));

export default useStyles;
