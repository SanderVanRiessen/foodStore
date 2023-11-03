import React from 'react';
import {View} from 'react-native';
import {SettingInputs} from '../layout';
import {makeStyles} from '@rneui/themed';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    backgroundColor: theme.colors.background,
  },
}));

const Settings = (): JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <SettingInputs />
    </View>
  );
};

export default Settings;
