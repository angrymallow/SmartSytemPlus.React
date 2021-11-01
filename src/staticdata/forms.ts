import { APIResponse } from "../types/interfaces/api/APIResponse";
import { IForm } from "../types/interfaces/IForm";

const forms: IForm[] = [
  {
    id: 1,
    name: "IVSI Form Default",
  },
  {
    id: 2,
    name: "IVSI Form Asha",
  },
  {
    id: 3,
    name: "IVSI Form Asakusa",
  },
  {
    id: 4,
    name: "IVSI Form Bizupon",
  },
]

const getFormsAsync = (): Promise<APIResponse<IForm[]>> => {
  return new Promise((resolve, reject) => 
    setTimeout(() => {
      resolve({success: true, data: forms})
    }, 1500)
  )
}

export default forms;
export { getFormsAsync };