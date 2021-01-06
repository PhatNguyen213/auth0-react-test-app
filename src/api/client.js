import axios from 'axios';
import { toProductModel, toProductResponse } from './adapters/productAdapter';

export default function client(
  endpoint,
  { method, data, token, headers: customHeaders, ...customConfigs } = {}
) {
  const config = {
    baseURL: '',
    url: endpoint,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    method,
    data,
    ...customConfigs,
  };
  return axios(config);
}

export function productClient(endpoint, ...restConfig) {
  return client(endpoint, {
    ...restConfig,
    transformRequest: data => toProductResponse(data),
    transformResponse: response => toProductModel(response),
  });
}
