import {useEffect, useState} from 'react';
import {url} from '../data';
import {ProductItem} from '../types';

export function useCategories() {
  const [data, setData] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url + 'productItems')
      .then(response => response.json())
      .then(json => {
        const categories = json.reduce(
          (acc: Set<string>, item: ProductItem) => {
            acc.add(item.category);
            return acc;
          },
          new Set(),
        );
        setData(categories);
      })
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return {data, error, loading};
}
