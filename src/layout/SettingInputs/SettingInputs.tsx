import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {useTranslation} from 'react-i18next';
import {TriangleColorPicker, toHsv, fromHsv} from 'react-native-color-picker';
import styles from './styles';
import {Panel} from '../../components';
import {useTheme} from '@rneui/themed';

const SettingInputs = (): JSX.Element => {
  const {theme, updateTheme} = useTheme();
  const [backgroundColor, setBackgroundColor] = useState(
    theme.colors.background,
  );
  const {t, i18n} = useTranslation();

  function handleTranslation(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.background,
      }}>
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
        <View style={styles.colorPickerContainer}>
          <TriangleColorPicker
            color={toHsv(backgroundColor)}
            style={styles.colorPicker}
            hideControls
            onColorChange={color => {
              const formatedColor = fromHsv(color);
              setBackgroundColor(formatedColor);
              updateTheme({
                lightColors: {
                  background: formatedColor,
                },
              });
            }}
          />
        </View>
      </Panel>
    </View>
  );
};

export default SettingInputs;
