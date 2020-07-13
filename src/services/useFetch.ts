import useSWR from "swr";
import api from "../services/api";

/**
 * By default, key will be passed to fetcher as the argument. So the following 3 expressions are equivalent:
 * useSWR('/api/user', () => fetcher('/api/user'))
 * useSWR('/api/user', url => fetcher(url))
 * useSWR('/api/user', fetcher)
 */

/* Axios fetch */
// async function fetcher(url: string) {
//   const response = await api.get(url);
//   return response.data;
// }

/* Axios fetch short version */
const fetcher = (url: string) => api.get(url).then((res) => res.data);

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, fetcher);
  return { data, error, mutate };
}
