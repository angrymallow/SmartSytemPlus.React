import { AxiosInstance } from "axios";
import { httpClient as HttpClient  } from ".";
import { IPatternDto, IPatternPostData } from "../types/interfaces";
const httpClient: AxiosInstance = HttpClient;

const apiendpoint = "/patternbindings";

const getAll = () => httpClient.get<IPatternDto[]>(apiendpoint)
    .then((resp) => resp.data)
    .catch((err) => { throw err})

const getLookup = () => httpClient.get(`${apiendpoint}/lookup`)
    .then((resp) => resp.data)
    .catch((err) => { throw err });

const getDuplicates = (name: string, country: number) =>  httpClient.post(`${apiendpoint}/duplicates`, {name, country})
  .then((resp) => resp.data)
  .catch((err) => { throw err });


const getHeaders = () => httpClient.get("/headers")
  .then((resp) => resp.data.map((header: any) => ({ ...header, headerId: header.id})))
  .catch((err) => { throw err });


const add = (postData: IPatternPostData) => httpClient.post(apiendpoint, {...postData});

const PatternBindingsService = {
  getAll,
  getLookup,
  getDuplicates,
  getHeaders,
  add,
}

export { PatternBindingsService }