import {NavigationProp} from '@react-navigation/native';

type Pages = {
  Main: undefined;
  Home: undefined;
  SettingsMain: undefined;
  Settings: undefined;
  Bookmark: undefined;
  BookmarkMain: undefined;
  Cart: undefined;
  CartMain: undefined;
  Filter: undefined;
};

interface BarIconsProps {
  name: string;
  color: string;
  size: number;
}

type StackNavigation = NavigationProp<Pages>;

interface ProductItem {
  id: number;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: string;
  location: string;
  contact: string;
}

export type {Pages, BarIconsProps, StackNavigation, ProductItem};
