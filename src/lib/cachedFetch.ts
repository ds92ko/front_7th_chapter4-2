import axios, { AxiosResponse } from 'axios';

const cache = new Map<string, Promise<AxiosResponse>>();

export function cachedFetch<T>(url: string): Promise<AxiosResponse<T>> {
  const isCacheHit = cache.has(url);
  console.log(`[${isCacheHit ? '캐시' : '요청'}] ${url}:`, performance.now());

  if (isCacheHit) return cache.get(url)! as Promise<AxiosResponse<T>>;

  const promise = axios.get<T>(url).then(
    response => response,
    error => {
      cache.delete(url);
      throw error;
    },
  );

  cache.set(url, promise);
  return promise;
}
