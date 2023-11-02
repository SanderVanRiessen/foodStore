import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {useTranslation} from 'react-i18next';
import {TriangleColorPicker, toHsv, fromHsv} from 'react-native-color-picker';
import styles from './styles';
import {Panel} from '../../components';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingInputs = (): JSX.Element => {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const {t, i18n} = useTranslation();

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('backGround').then(res => {
        if (res) {
          setBackgroundColor(JSON.parse(res));
        } else {
          setBackgroundColor('#fff');
        }
      });
    }, []),
  );

  function handleTranslation(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <View style={{...styles.container, backgroundColor}}>
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
              setBackgroundColor(fromHsv(color));
              AsyncStorage.setItem(
                'backGround',
                JSON.stringify(fromHsv(color)),
              );
            }}
          />
        </View>
      </Panel>
    </View>
  );
};

export default SettingInputs;
