import * as Yup from "yup";

export const CONTACT_LIST = [
  {
    id: 1,
    name: "Neeraj Singh",
    email: "neeraj@bigbinary.com",
    department: "eng",
    contactNumber: "(555)-390-102",
    addToBaseCamp: false
  },
  {
    id: 2,
    name: "Vinay Chandran",
    email: "vinay@bigbinary.com",
    department: "eng",
    contactNumber: "99210011001",
    addToBaseCamp: true
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
  contactNumber: "",
  department: ""
};

export const FORM_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  contactNumber: Yup.string().required("Contact is required"),
  department: Yup.object().required("Department is required")
});
