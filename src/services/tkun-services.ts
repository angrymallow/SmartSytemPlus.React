
import { AxiosInstance } from "axios";
import { httpClient as HttpClient  } from ".";
import { TKun } from "../hooks/tkun/useImportTkun";
const httpClient: AxiosInstance = HttpClient;

const apiendpoint = "/tetsudaikuns";


const getAll = () => httpClient.get<TKun[]>(apiendpoint)
    .then((resp) => resp.data)
    .catch((err) => { throw err});


const upload = (payload: TKun[]) => httpClient.post(apiendpoint, payload,  { headers: { 'Content-Type': 'application/json' }})
  .catch((err) => {throw err});


const TkunServices = {
  getAll,
  upload
}

export { TkunServices };