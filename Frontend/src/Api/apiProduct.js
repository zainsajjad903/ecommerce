const createProduct = async (Data) => {
  try {
    const response = await fetch("/api/products/createProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      console.error("Error creating product:", result.message || "Unknown error");
      return result;
    }
    
    console.log("Product created successfully:", result);
    return result;
  } catch (error) {
    console.error("Network or parsing error:", error);
    throw error;
  }
};
export { createProduct };
