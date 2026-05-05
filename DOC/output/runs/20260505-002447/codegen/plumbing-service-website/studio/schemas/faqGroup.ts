const faqGroupSchema = {
  name: "faqGroup",
  type: "document",
  title: "FAQ Group",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "items", type: "array", title: "Items" },
  ],
};

export default faqGroupSchema;