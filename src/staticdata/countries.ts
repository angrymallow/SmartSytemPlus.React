import { APIResponse } from "../types/interfaces/api/APIResponse";
import { ICountry } from "../types/interfaces/ICountry";

const countries: ICountry[] = [
  {
    id: 1,
    name: "Subic Bay, Philippines",
  },
  {
    id: 2,
    name: "Vladivostok, Russia",
  },
  {
    id: 3,
    name: "A, All Port",
  },
  {
    id: 4,
    name: "Auckland, New Zealand",
  },
  {
    id: 5,
    name: "Dar Es Salaam, Tanzania",
  },
  {
    id: 6,
    name: "Fiji, Suva",
  },
  {
    id: 7,
    name: "Georgetown, Guyana",
  },
  {
    id: 8,
    name: "Iquique, Chile",
  },
  {
    id: 9,
    name: "Karachi, Pakistan",
  },
  {
    id: 10,
    name: "Mombasa, Kenya",
  },
  {
    id: 11,
    name: "Port AU Prince, Haiti",
  },
  {
    id: 12,
    name: "Port of Spain, Trinidad and Tobago",
  },
  {
    id: 13,
    name: "South Hampton, United Kingdom",
  },
  {
    id: 14,
    name: "St. John, Antigua",
  },
]

const getAllCountriesAsync = async(): Promise<APIResponse<ICountry[]>> => {
  return new Promise((resolve, reject) => 
    setTimeout(() => {
      resolve({success: true, data: countries})
    }, 1500)
  )
}

export default countries;

export { getAllCountriesAsync }