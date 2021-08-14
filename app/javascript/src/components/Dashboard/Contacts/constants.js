import * as Yup from "yup";

export const CONTACT_LIST = [
  {
    id: 1,
    name: "Neeraj Singh",
    email: "neeraj@bigbinary.com",
    department: "Engineering",
    contactNumber: "(555)-390-102",
    addToBaseCamp: false
  },
  {
    id: 2,
    name: "Vinay Chandran",
    email: "vinay@bigbinary.com",
    department: "Engineering",
    contactNumber: "99210011001",
    addToBaseCamp: false
  }
];

export const SORT_OPTIONS = [
  { label: "Name", value: "name" },
  { label: "Department", value: "department" }
];

export const DEPARTMENT_OPTIONS = [
  { label: "Engineering", value: "eng" },
  { label: "Marketing", value: "markt" }
];

export const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  contact: "",
  department: ""
};

export const FORM_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  contact: Yup.string().required("Contact is required"),
  department: Yup.object().required("Department is required")
});
