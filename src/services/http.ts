import axios, { Axios, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

type IRequestInterceptorHandler = (
  value: InternalAxiosRequestConfig
) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;

type IResponseInterceptorHandler = (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;

type IInterceptorErrorHandler = (error: unknown) => unknown;

class HttpService {
  private axios: Axios;

  constructor(baseURL: string) {
    this.axios = axios.create({ baseURL });
  }

  get(url: string, config?: InternalAxiosRequestConfig) {
    return this.axios.get(url, config);
  }

  post(url: string, data?: unknown, config?: InternalAxiosRequestConfig) {
    return this.axios.post(url, data, config);
  }

  put(url: string, data?: unknown, config?: InternalAxiosRequestConfig) {
    return this.axios.put(url, data, config);
  }

  delete(url: string, config?: InternalAxiosRequestConfig) {
    return this.axios.delete(url, config);
  }

  addRequestInterceptor(
    handler: IRequestInterceptorHandler,
    errorHandler?: IInterceptorErrorHandler
  ) {
    this.axios.interceptors.request.use(handler, errorHandler);
  }

  addResponseInterceptor(
    handler: IResponseInterceptorHandler,
    errorHandler?: IInterceptorErrorHandler
  ) {
    this.axios.interceptors.response.use(handler, errorHandler);
  }
}

export default HttpService;
