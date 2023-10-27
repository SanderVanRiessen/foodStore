import {useEffect, useState} from 'react';
import {headers, url} from '../data';
import {ProductItem} from '../types';

export function useBookmarks() {
  const [data, setData] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = () => {
    fetch(url + 'Bookmarks')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return {data, error, loading, refetch};
}

export function useBookmark(id: number) {
  const [data, setData] = useState<ProductItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url + 'Bookmarks/' + id)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }, [id]);

  return {data, error, loading};
}

export function saveBookmark(productItem: ProductItem) {
  return fetch(url + 'Bookmarks', {
    method: 'POST',
    headers,
    body: JSON.stringify({...productItem}),
  });
}

export function deleteBookmark(id: number) {
  return fetch(url + 'Bookmarks/' + id, {
    method: 'DELETE',
  });
}
