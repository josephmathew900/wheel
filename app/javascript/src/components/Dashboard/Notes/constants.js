import dayjs from "dayjs";
import * as Yup from "yup";

export const NOTES = [
  {
    id: 1,
    title: "Change support email",
    description: "forward all internal mails through external SMTP server",
    tag: "internal",
    createdDate: dayjs(),
    dueDate: "",
    contact: "Joseph Mathew"
  },
  {
    id: 2,
    title: "Feedback",
    description: "Feedback v1.0",
    tag: "agileWorkflow",
    createdDate: dayjs(),
    dueDate: dayjs(),
    contact: "Joseph Varghese"
  },
  {
    id: 3,
    title: "feedback Hover",
    description: "Feedback v2.0",
    tag: "bug",
    createdDate: dayjs(),
    dueDate: "",
    contact: "Karthik Menon"
  }
];

export const BADGE_OPTIONS = {
  internal: { color: "blue", text: "Internal" },
  agileWorkflow: { color: "green", text: "Agile Workflow" },
  bug: { color: "red", text: "Bug" }
};

export const SORT_OPTIONS = [
  { label: "Name", value: "name" },
  { label: "Tag", value: "tag" },
  { label: "Created Date", value: "created_at" }
];

export const TAG_OPTIONS = [
  { value: "internal", label: "Internal" },
  { value: "agileWorkflow", label: "Agile Workflow" },
  { value: "bug", label: "Bug" }
];

export const CONTACT_OPTIONS = [
  { value: "jm", label: "Joseph Mathew" },
  { value: "jv", label: "Joseph Varghese" },
  { value: "km", label: "Karthik Menon" }
];

export const FORM_INITIAL_VALUES = {
  title: "",
  tags: "",
  description: "",
  assignedContact: ""
};

export const FORM_VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  tags: Yup.object().required("Tag is required"),
  description: Yup.string().required("Description is required"),
  assignedContact: Yup.object().required("Contact is required")
});
