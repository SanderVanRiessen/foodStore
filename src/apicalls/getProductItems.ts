import {useEffect, useState} from 'react';
import {url} from '../data';
import {ProductItem} from '../types';

export function useProductItems() {
  const [data, setData] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url + 'productItems')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return {data, error, loading};
}

export function useProductItemsByCategory(category: string[]) {
  const [data, setData] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filterString = category.map(c => `category=${c}`).join('&');
  const fetchData = (filter: string) => {
    if (filter.length === 0) {
      filter = 'category=null';
    }
    fetch(url + 'productItems?' + filter)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData(filterString);
  }, [filterString]);

  const refetch = () => {
    fetchData(filterString);
  };

  return {data, error, loading, refetch};
}
