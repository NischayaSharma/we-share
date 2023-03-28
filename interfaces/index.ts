// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type NGODetails = {
  SNo: number;
  "NGO Name": string;
  "NGO Head Name": string;
  Designation: string;
  Address: string;
  State: string;
  District: string;
  "Email id": string;
  Mobile: number;
}
