export interface APIResponse<T> {
  success?: boolean,
  error?: boolean,
  errorMessage?: string,
  data?: T
}