const headerInterceptor = (httpClient) => {
  httpClient.interceptors.request.use((config) => {
    const jwtToken = "JWT TOKEN KEY";
    config.headers["Authorization"] = jwtToken;

    return config;
  })
}

export default headerInterceptor;