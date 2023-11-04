import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {ProductItem} from '../../types';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
  deleteBookmark,
  saveBookmark,
  useBookmark,
} from '../../apicalls/Bookmarks';
import {Image, Modal, SubDetailItem} from '../../components';
import {saveItemInCart} from '../../apicalls/Cart';
import {useTranslation} from 'react-i18next';

interface ProductDetailProps {
  product: ProductItem;
}

const ProductDetail = ({product}: ProductDetailProps): JSX.Element => {
  const {id, price, location, contact, images} = product;
  const [imageUrl, setImageUrl] = useState<null | string>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const {data} = useBookmark(id);
  const {t} = useTranslation();

  function handleBookmark() {
    if (isBookmarked) {
      deleteBookmark(id);
      setIsBookmarked(false);
    } else {
      saveBookmark(product);
      setIsBookmarked(true);
    }
  }

  function addToCart() {
    saveItemInCart(product, 1);
  }

  useEffect(() => {
    if (data?.id) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [data]);

  return (
    <ScrollView>
      <View style={styles.detailContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleBookmark}>
            {isBookmarked ? (
              <Icon name="heart" color="red" size={30} />
            ) : (
              <Icon name="heart" size={30} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={addToCart}>
            <Icon name="shopping-cart" size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.detailTitle}>{t(`products.${id}.name`)}</Text>
        <Text style={styles.descriptionText}>
          {t(`products.${id}.description`)}
        </Text>
        <View style={styles.subDetails}>
          <SubDetailItem label={t('price')} value={`$${price}`} />
          <SubDetailItem label={t('contact')} value={contact} />
          <SubDetailItem label={t('location')} value={location} />
        </View>
      </View>
      <View style={styles.imageContainer}>
        {images.map((url, i) => (
          <TouchableOpacity key={i} onPress={() => setImageUrl(url)}>
            <Image width={150} height={150} url={url} />
          </TouchableOpacity>
        ))}
      </View>
      {imageUrl && (
        <Modal
          onDismiss={() => {
            setImageUrl(null);
          }}>
          <Image width={330} height={330} url={imageUrl} />
        </Modal>
      )}
    </ScrollView>
  );
};

export default ProductDetail;
