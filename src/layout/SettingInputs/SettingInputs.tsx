import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {useTranslation} from 'react-i18next';
import {TriangleColorPicker, toHsv, fromHsv} from 'react-native-color-picker';
import useStyles from './styles';
import {Panel} from '../../components';
import {useTheme} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingInputs = (): JSX.Element => {
  const {theme, updateTheme} = useTheme();
  const [backgroundColor, setBackgroundColor] = useState(
    theme.colors.background,
  );
  const {t, i18n} = useTranslation();
  const styles = useStyles();

  function handleTranslation(lang: string) {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      updateTheme({
        lightColors: {
          background: backgroundColor,
        },
      });
      AsyncStorage.setItem('backgroundColor', backgroundColor);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [backgroundColor, updateTheme]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('settings')}</Text>
      <Panel title={t('language')}>
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
      <Panel title={t('theme')}>
        <View style={styles.colorPickerContainer}>
          <TriangleColorPicker
            color={toHsv(backgroundColor)}
            style={styles.colorPicker}
            hideControls
            onColorChange={color => {
              const formatedColor = fromHsv(color);
              setBackgroundColor(formatedColor);
            }}
          />
        </View>
      </Panel>
    </View>
  );
};

export default SettingInputs;
