const legalPageSchema = {
  name: "legalPage",
  type: "document",
  title: "Legal Page",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "body", type: "array", title: "Body" },
  ],
};

export default legalPageSchema;