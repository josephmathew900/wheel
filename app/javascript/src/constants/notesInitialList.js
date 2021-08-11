import dayjs from "dayjs";

export default [
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
