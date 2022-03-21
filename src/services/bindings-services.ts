import { AxiosInstance } from "axios";
import { httpClient as HttpClient  } from ".";

const httpClient: AxiosInstance = HttpClient;
const apiendpoint = "/bindings";

const getAll = () => httpClient.get(apiendpoint)
    .then((resp) => resp.data)
    .catch((err) => { throw err });

const add = (payload: any) => httpClient.post(apiendpoint, payload); 

const update = (id: number, payload: any) => httpClient.put(`${apiendpoint}/${id}`, payload );

const AddressBindingsService = {
  getAll,
  add,
  update
}

export { AddressBindingsService };