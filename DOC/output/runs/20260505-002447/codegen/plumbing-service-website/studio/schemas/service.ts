const serviceSchema = {
  name: "service",
  type: "document",
  title: "Service",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "slug", type: "slug", title: "Slug" },
    { name: "summary", type: "text", title: "Summary" },
  ],
};

export default serviceSchema;