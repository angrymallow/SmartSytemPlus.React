import { AxiosInstance } from "axios";
import { httpClient as HttpClient  } from ".";
const httpClient: AxiosInstance = HttpClient;

const apiendpoint = "/patternbindings";

const getLookup = () => httpClient.get(`${apiendpoint}/lookup`)
    .then((resp) => resp.data)
    .catch((err) => { throw err });

const getDuplicates = (name: string, country: number) =>  httpClient.get(`${apiendpoint}/duplicates`, {params: {name, country}})
  .then((resp) => resp.data)
  .catch((err) => { throw err });


const getHeaders = () => httpClient.get("/headers")
  .then((resp) => resp.data.map((header: any) => ({ ...header, headerId: header.id})))
  .catch((err) => { throw err });


const addBinding = (postData: any) => httpClient.post(apiendpoint, {...postData});

const PatternBindingsService = {
  getLookup,
  getDuplicates,
  getHeaders,
  addBinding,
}

export { PatternBindingsService }