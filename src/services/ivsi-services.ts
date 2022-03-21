
import { AxiosInstance } from "axios";
import { httpClient as HttpClient  } from ".";
const httpClient: AxiosInstance = HttpClient;

const apiendpoint = "/IvsiForms";

const getForms = () => httpClient.get(apiendpoint).then((resp) => resp.data).catch((err) => {throw err});
const updateForms = (id: number, payload: any) => httpClient.put(`${apiendpoint}/${id}`, payload, { headers: { 'Content-Type': 'application/json' }});
const addform = (payload: any) => {
  const formData = new FormData();
  formData.append("File", payload.file);
  formData.append("Name", payload.name);
  formData.append("Description", payload.description);

  return httpClient.post(apiendpoint, formData);
}
const getFile = (id: number) => httpClient.get(`${apiendpoint}/${id}/file`);
const downloadForm = (id: number) => httpClient.get(`${apiendpoint}/${id}/download`, {responseType: "blob"});

export { getForms, updateForms, downloadForm, getFile, addform };