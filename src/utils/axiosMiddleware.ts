import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

class AxiosMiddleware {
  private apiClient: AxiosInstance;

  constructor(timeout: number = 10000) {
    this.apiClient = axios.create({
      baseURL:"https://jsonplaceholder.typicode.com", // Get your base URL from .env file
      timeout,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.initializeInterceptors();
  }

  // Initialize interceptors
  private initializeInterceptors() {
    // Request Interceptor
    this.apiClient.interceptors.request.use(
      (config: AxiosRequestConfig | any) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${token}`;
        }
        console.log("Request:", config);
        return config;
      },
      (error: AxiosError) => {
        console.error("Request Error:", error);
        return Promise.reject(error);
      }
    );

    // Response Interceptor
    this.apiClient.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log("Response:", response);
        return response;
      },
      (error: AxiosError) => {
        console.error("Response Error:", error);

        if (error.response) {
          const { status } = error.response;

          if (status === 401) {
            console.log("Unauthorized! Redirecting to login...");
            window.location.href = "/login";
          } 
        }

        return Promise.reject(error);
      }
    );
  }

  // Public methods to make HTTP requests
  public get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.apiClient.get<T>(url, config);
  }

  public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.apiClient.post<T>(url, data, config);
  }

  public put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.apiClient.put<T>(url, data, config);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.apiClient.delete<T>(url, config);
  }
}

export default AxiosMiddleware;
