import React from 'react';
import i18n from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider, createTheme} from '@rneui/themed';

import en from './src/local/en/translations.json';
import nl from './src/local/nl/translations.json';
import {BarIconsProps} from './src/types';
import {
  Home,
  Settings,
  Bookmark,
  Cart,
  Filter,
  ProductDetail,
} from './src/pages';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en,
    nl,
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const theme = createTheme({
  lightColors: {
    background: '#d2d2d2',
  },
});

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Main"
      component={Home}
      options={{headerShown: false}}
    />
    <HomeStack.Screen name="Filter" component={Filter} />
    <HomeStack.Screen
      name="ProductDetail"
      component={ProductDetail}
      options={({route}) => ({
        title: route.params.product.name,
      })}
    />
  </HomeStack.Navigator>
);

const SettingsStack = createNativeStackNavigator();
const SettingsStackScreen = () => (
  <SettingsStack.Navigator screenOptions={{headerShown: false}}>
    <SettingsStack.Screen name="SettingsMain" component={Settings} />
  </SettingsStack.Navigator>
);

const BookmarkStack = createNativeStackNavigator();
const BookmerkStackScreen = () => (
  <BookmarkStack.Navigator screenOptions={{headerShown: false}}>
    <BookmarkStack.Screen name="BookmarkMain" component={Bookmark} />
  </BookmarkStack.Navigator>
);

const CartStack = createNativeStackNavigator();
const CartStackScreen = () => {
  const {t} = useTranslation();
  return (
    <CartStack.Navigator screenOptions={{headerShown: false}}>
      <CartStack.Screen name={t('myShoppingCart')} component={Cart} />
    </CartStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function barIcons({name, color, size}: BarIconsProps): JSX.Element {
  let iconName = 'home';
  if (['Bookmark', 'Favorieten'].includes(name)) {
    iconName = 'heart';
  }
  if (['Settings', 'Instellingen'].includes(name)) {
    iconName = 'cog';
  }
  if (['Cart', 'Winkelwagen'].includes(name)) {
    iconName = 'shopping-cart';
  }
  return <Icon name={iconName} size={size} color={color} />;
}
function App(): JSX.Element {
  const {t} = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              return barIcons({name: route.name, color, size});
            },
            headerShown: false,
          })}
          initialRouteName={t('home')}>
          <Tab.Screen name={t('home')} component={HomeStackScreen} />
          <Tab.Screen name={t('settings')} component={SettingsStackScreen} />
          <Tab.Screen name={t('bookmark')} component={BookmerkStackScreen} />
          <Tab.Screen name={t('cart')} component={CartStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
