import api from "../services/api";
import useSWRNative from "@nandorojo/swr-react-native";

export function useFetch(url, options) {
  const { data, mutate } = useSWRNative(
    url,
    async (url) => {
      const response = await api.get(url);
      return response.data;
    },
    options
      ? options
      : {
          refreshInterval: 1000,
          revalidateOnFocus: true,
          revalidateOnReconnect: true,
        }
  );

  return { data, mutate };
}
