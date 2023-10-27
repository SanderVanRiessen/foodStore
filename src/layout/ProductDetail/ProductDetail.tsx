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
import {Image} from '../../components';
import {saveItemInCart} from '../../apicalls/Cart';

interface ProductDetailProps {
  product: ProductItem;
}

const ProductDetail = ({product}: ProductDetailProps): JSX.Element => {
  const {id, name, price, description, location, contact, images} = product;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const {data} = useBookmark(id);

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
        <Text style={styles.detailText}>{name}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
        <View style={styles.subDetails}>
          <Text style={styles.priceText}>${price}</Text>
          <Text style={styles.contactText}>{contact}</Text>
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        {images.map((url, i) => (
          <Image width={150} height={150} key={i} url={url} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
