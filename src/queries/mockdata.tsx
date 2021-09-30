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

const patterns = [
  {
    id: 1,
    name: "A.D.N GROUP KW",
    typeId: 4,
    formId: 2,
    countryIds: [1, 3, 5, 7, 9, 11, 13],
  },
  {
    id: 2,
    name: "AA JAPAN KB",
    typeId: 2,
    formId: 3,
    countryIds: [2, 4, 6, 8, 10, 12, 14],
  },
  {
    id: 3,
    name: "MAIN",
    typeId: 1,
    formId: 1,
    countryIds: [1, 3, 5, 7, 9, 11, 13],
  },
  {
    id: 4,
    name: "ACTION MOTORS YK",
    typeId: 1,
    formId: 3,
    countryIds: [2, 4, 6, 8, 10, 12, 14],
  },
  {
    id: 5,
    name: "AKEBONO SM",
    typeId: 4,
    formId: 4,
    countryIds: [1, 3, 5, 7, 9, 11, 13],
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
        .filter((pattern) => pattern.countryIds.includes(countryId))
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
