const reviewSchema = {
  name: "review",
  type: "document",
  title: "Review",
  fields: [
    { name: "quote", type: "text", title: "Quote" },
    { name: "name", type: "string", title: "Name" },
    { name: "context", type: "string", title: "Context" },
  ],
};

export default reviewSchema;