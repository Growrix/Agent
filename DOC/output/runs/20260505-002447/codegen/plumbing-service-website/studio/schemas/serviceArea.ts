const serviceAreaSchema = {
  name: "serviceArea",
  type: "document",
  title: "Service Area",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "slug", type: "slug", title: "Slug" },
    { name: "summary", type: "text", title: "Summary" },
  ],
};

export default serviceAreaSchema;