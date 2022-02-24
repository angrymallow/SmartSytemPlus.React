import { APIResponse } from "../types/interfaces/api/APIResponse";
import { Header } from "../types/interfaces/Header";

const headers: Header[] = [
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



export default headers;