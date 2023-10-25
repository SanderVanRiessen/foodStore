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
