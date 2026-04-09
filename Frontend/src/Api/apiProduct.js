const createProduct = async (Data) => {
  return fetch("/api/products/createProduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  });
};
export { createProduct };
