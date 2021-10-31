import { Header } from "../types/interfaces/Header";

export const activities = [
  {
    id: 0,
    name: "Created Pineapple Uniform",
    time: "1 hour ago",
  },
  {
    id: 1,
    name: "Updated IVSI Form",
    time: "5 minutes ago",
  },
  {
    id: 2,
    name: "Added new Address Binding",
    time: "1 hour ago",
  },
  {
    id: 3,
    name: "Application Started",
    time: "2 hours ago",
  },
];

export const announcements = [
  {
    id: 1,
    name: "Sheldon Cooper",
    avatar: "lemon",
    activity: "Created Address Binding for DAL",
  },
  {
    id: 2,
    name: "Rajesh Koothrappali",
    avatar: "orange",
    activity: "Uploaded new T- Kun data",
  },
  {
    id: 3,
    name: "Leonard Hofstadter",
    avatar: "coconut",
    activity: "Jason recently joined the team, hooray!",
  },
  {
    id: 4,
    name: "Howard Wolowitz",
    avatar: "pear",
    activity: "Created Strawberry",
  },
];

const countries = [
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
];

const ivsiForms = [
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
];

const patternCodes = [
  {
    id: 1,
    code: "211",
    name: "Multi Files, Single Sheet, Single Unit",
  },
  {
    id: 2,
    code: "212",
    name: "Multi Files, Single Sheet, Multi Units",
  },
  {
    id: 3,
    code: "121",
    name: "Single File, Multi Sheets, Single Unit",
  },
  {
    id: 4,
    code: "112",
    name: "Single File, Single Sheet, Multi Units",
  },
];


const patterns: any[] = [
  {
    id: 1,
    name: "A.D.N GROUP KW",
    typeId: 4,
    formId: 2,
    countryId: 1,
    addedBy: 0,
    addedDate: "08/20/2021",
    updatedBy: 0,
    updatedDate: "",
  },
  {
    id: 2,
    name: "AA JAPAN KB",
    typeId: 2,
    formId: 3,
    countryId: 2,
    uploadInfo: {
      uploadedBy: "Carmelo Besid",
      uploadDate: "08/25/2021 11:37 PM",
    },
  },
  {
    id: 3,
    name: "MAIN",
    typeId: 1,
    formId: 1,
    countryId: 1,
    uploadInfo: {
      uploadedBy: "Carmelo Besid",
      uploadDate: "08/20/2021 09:14 PM",
    },
  },
  {
    id: 4,
    name: "ACTION MOTORS YK",
    typeId: 1,
    formId: 3,
    countryId: 2,
    uploadInfo: {
      uploadedBy: "Carmelo Besid",
      uploadDate: "08/20/2021 09:14 PM",
    },
  },
  {
    id: 5,
    name: "AKEBONO SM",
    typeId: 4,
    formId: 4,
    countryId: 1,
    uploadInfo: {
      uploadedBy: "Carmelo Besid",
      uploadDate: "08/20/2021 09:14 PM",
    },
  },
  {
    id: 6,
    name: "CAPTAIN TRADERS - MAIN",
    typeId: 4,
    formId: 1,
    countryId: 3,
    uploadInfo: {
      uploadedBy: "Carmelo Besid",
      uploadDate: "08/20/2021 09:14 PM",
    },
  },
  {
    id: 7,
    name: "RELATION-MAIN",
    typeId: 2,
    formId: 1,
    countryId: 4,
    uploadInfo: {
      uploadedBy: "Carmelo Besid",
      uploadDate: "08/20/2021 09:14 PM",
    },
  },
  {
    id: 8,
    name: "FRT - AUTO WORLD",
    typeId: 4,
    formId: 1,
    countryId: 6,
    uploadInfo: {
      uploadedBy: "Carmelo Besid",
      uploadDate: "08/20/2021 09:14 PM",
    },
  },
];

const pineappleData = [
  {
    date: "08/24/2021",
    chassisNo: "SKP2V-214696",
    refNo: "",
    model: "",
    color: "",
    mileage: "",
    engineNo: "",
    country: "Japan",
    incoTerms: "C&F Vladivostok",
    currency: "Yen",
  },
  {
    date: "08/24/2021",
    chassisNo: "ZE2-1180891",
    refNo: "",
    model: "",
    color: "",
    mileage: "",
    engineNo: "",
    country: "Japan",
    incoTerms: "C&F Vladivostok",
    currency: "Yen",
  },
  {
    date: "08/24/2021",
    chassisNo: "FR4-1004854",
    refNo: "",
    model: "",
    color: "",
    mileage: "",
    engineNo: "",
    country: "Japan",
    incoTerms: "C&F Vladivostok",
    currency: "Yen",
  },
  {
    date: "08/24/2021",
    chassisNo: "ZVW50-6119847",
    refNo: "",
    model: "",
    color: "",
    mileage: "",
    engineNo: "",
    country: "Japan",
    incoTerms: "C&F Vladivostok",
    currency: "Yen",
  },
  {
    date: "08/24/2021",
    chassisNo: "VASW50-6119",
    refNo: "",
    model: "",
    color: "",
    mileage: "",
    engineNo: "",
    country: "Japan",
    incoTerms: "C&F Vladivostok",
    currency: "Yen",
  },
  {
    date: "08/24/2021",
    chassisNo: "QWAKJ-219-123",
    refNo: "",
    model: "",
    color: "",
    mileage: "",
    engineNo: "",
    country: "Japan",
    incoTerms: "C&F Vladivostok",
    currency: "Yen",
  },
];

const mockHeaders: Header[] = [
  {
    headerId: 1,
    name: "Date",
    helperText: "Date Created",
  },
  {
    headerId: 2,
    name: "Chassis no.",
  },
  {
    headerId: 3,
    name: "Ref No.",
  },
  {
    headerId: 4,
    name: "Maker",
  },
  {
    headerId: 5,
    name: "Model",
  },
  {
    headerId: 6,
    name: "Color",
  },
  {
    headerId: 7,
    name: "Mileage",
  },
  {
    headerId: 8,
    name: "Engine No,",
  },
  {
    headerId: 9,
    name: "Country",
  },
  {
    headerId: 10,
    name: "Incoterms",
  },
  {
    headerId: 11,
    name: "Currency",
    fixValues: ["USD", "YEN", "PHP"],
  },
  {
    headerId: 12,
    name: "Cargo",
    helperText: "Used Vehicle/ 1 of used vehicle(s)",
  },
  {
    headerId: 13,
    name: "Price",
    noDefaultValue: true,
  },
  {
    headerId: 14,
    name: "Freight",
    helperText: "Freight Prepaid as arrange",
  },
  {
    headerId: 15,
    name: "IV No.",
    noDefaultValue: true,
  },
  {
    headerId: 16,
    name: "Shipping Company",
    helperText: "ECL, MOL, etc.",
  },
  {
    headerId: 17,
    name: "Ship Type",
    fixValues: ["RORO", "PC"],
  },
  {
    headerId: 18,
    name: "Local Vessel w/ Voy",
  },
  {
    headerId: 19,
    name: "Local Vessel",
  },
  {
    headerId: 20,
    name: "Local Voy",
  },
  {
    headerId: 21,
    name: "From",
  },
  {
    headerId: 22,
    name: "Ocean Vessel w/ Voy",
  },
  {
    headerId: 23,
    name: "Ocean Vessel",
  },
  {
    headerId: 24,
    name: "Ocean Voy",
  },
  {
    headerId: 25,
    name: "Port of Loading",
  },
  {
    headerId: 26,
    name: "Port of Discharge",
  },
  {
    headerId: 27,
    name: "For Tranship To",
  },
  {
    headerId: 28,
    name: "Final Destination",
  },
  {
    headerId: 29,
    name: "ETD",
  },
  {
    headerId: 30,
    name: "BL pcs",
    helperText: "1-3 / One-Three",
  },
  {
    headerId: 31,
    name: "BL Issue",
  },
  {
    headerId: 32,
    name: "BL Payment",
  },
  {
    headerId: 33,
    name: "IV Shipper",
  },
  {
    headerId: 34,
    name: "IV S/Address",
    occurence: 3,
    canBind: true,
  },
  {
    headerId: 35,
    name: "IV S/Consignee",
  },
  {
    headerId: 36,
    name: "IV C/Address",
    occurence: 5,
    canBind: true,
  },
  {
    headerId: 37,
    name: "Notify Party",
  },
  {
    headerId: 38,
    name: "IV N/Address",
    occurence: 5,
    canBind: true,
  },
  {
    headerId: 39,
    name: "SI Shipper",
  },
  {
    headerId: 40,
    name: "SI S/Address",
    occurence: 5,
    canBind: true,
  },
  {
    headerId: 41,
    name: "SI S/Consignee",
  },
  {
    headerId: 42,
    name: "SI C/Address",
    canBind: true,
  },
  {
    headerId: 43,
    name: "SI Notify Party",
  },
  {
    headerId: 44,
    name: "SI N/Address",
    canBind: true,
  },
  {
    headerId: 45,
    name: "BL Body F.Destination",
    helperText: "Display Final Destination in BL Body",
  },
  {
    headerId: 46,
    name: "Mark",
    occurence: 10,
  },
];

export function getHeaders() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ status: 200, headers: mockHeaders });
    }, 1000)
  );
}

export function processRawData(raw: any) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ status: 200, data: pineappleData });
    }, 5000)
  );
}

export function getPatternByCountry(countryId: number) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const result = patterns
        .filter((pattern) => pattern.countryId === countryId)
        .map((pattern) => {
          return {
            id: pattern.id,
            name: pattern.name,
          };
        });
      resolve({ status: 200, patterns: result });
    }, 200)
  );
}

export function getPatternInfoById(patternId: number, countryId: number) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const result = patterns.find((pattern) => pattern.id === patternId);
      const patternType = patternCodes.find(
        (code) => code.id === result?.typeId
      );
      const form = ivsiForms.find((form) => form.id === result?.formId);
      const country = countries.find((country) => country.id === countryId);
      const patternDetails = {
        ...result,
        type: `${patternType?.name} (${patternType?.code})`,
        form: form?.name,
        country: country?.name,
      };
      resolve({ status: 200, info: patternDetails });
    }, 200)
  );
}
export function getPineappleSetup() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ status: 200, data: { countries, ivsiForms } });
    }, 500)
  );
}

export function getLogs() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ status: 200, data: { activities, announcements } });
    }, 500)
  );
}

export function getCountries() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ status: 200, data: { countries } });
    }, 1500)
  );
}

export function getIVSIForms() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ status: 200, forms: ivsiForms });
    }, 500)
  );
}

export function getPatternTypes() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ status: 200, types: patternCodes });
    }, 500)
  );
}

export function getDuplicatePatternByNameAndCountry(patternName: string, countryId: number) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const duplicate = patterns.find(
        (pattern) => pattern.name.toLowerCase() === patternName.toLowerCase() && pattern.countryId === countryId
      );
      if (!!duplicate) {
        resolve({
          status: 200,
          result: {
            isDuplicate: true,
            duplicate,
          },
        });
      } else {
        resolve({
          status: 200,
          result: {
            isDuplicate: false,
            duplicate: null,
          },
        });
      }
    }, 1000)
  );
}

