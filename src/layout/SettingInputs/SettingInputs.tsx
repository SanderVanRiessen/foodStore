import React from 'react';
import {View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';
import {Panel} from '../../components';
import {useTranslation} from 'react-i18next';

const SettingInputs = (): JSX.Element => {
  const {t, i18n} = useTranslation();

  function handleTranslation(lang: string) {
    i18n.changeLanguage(lang);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SettingInputs</Text>
      <Panel title="Language">
        <SelectDropdown
          buttonStyle={styles.selectDropdown}
          defaultValue={i18n.language}
          data={['nl', 'en']}
          onSelect={selectedItem => {
            handleTranslation(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, _) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, _) => {
            return item;
          }}
        />
      </Panel>
      <Panel title="Theme">
        <Text style={styles.inputLabel}>Theme</Text>
        <View style={styles.colorPicker}>
          <Text style={styles.inputLabel}>Theme</Text>
        </View>
      </Panel>
    </View>
  );
};

export default SettingInputs;
