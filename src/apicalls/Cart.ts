import {useEffect, useState} from 'react';
import {headers, url} from '../data';
import {CartItem, ProductItem} from '../types';

export function useCart() {
  const [data, setData] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  function fetchData() {
    fetch(url + 'cart')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return {data, error, loading, refetch};
}

export function saveItemInCart(productItem: ProductItem, quantity: number) {
  return fetch(url + 'cart', {
    method: 'POST',
    headers,
    body: JSON.stringify({product: {...productItem}, quantity}),
  });
}

export function deleteCartItem(id: number) {
  return fetch(url + 'Cart/' + id, {
    method: 'DELETE',
  });
}
