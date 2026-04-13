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
      console.error(
        "Error creating product:",
        result.message || "Unknown error",
      );
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
//get all products
const getAllProducts = async () => {
  try {
    const response = await fetch("/api/products/getAllProducts");
    const result = await response.json();
    if (!response.ok) {
      console.error(
        "Error fetching products:",
        result.message || "Unknown error",
      );
      return result;
    }
    console.log("Products fetched successfully:", result);
    return result;
  } catch (error) {
    console.error("Network or parsing error:", error);
    throw error;
  }
};
export { getAllProducts };
//get single product
const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`/api/products/getSingleProduct/${id}`);
    const result = await response.json();
    if (!response.ok) {
      console.error(
        "Error fetching product:",
        result.message || "Unknown error",
      );
      return result;
    }
    console.log("Product fetched successfully:", result);
    return result;
  } catch (error) {
    console.error("Network or parsing error:", error);
    throw error;
  }
};
export { getSingleProduct };
//update product
const updateProduct = async (id, Data) => {
  try {
    const response = await fetch(`/api/products/updateProduct/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error(
        "Error updating product:",
        result.message || "Unknown error",
      );
      return result;
    }

    console.log("Product updated successfully:", result);
    return result;
  } catch (error) {
    console.error("Network or parsing error:", error);
    throw error;
  }
};
export { updateProduct };
//delete product
const deleteProduct = async (id) => {
  try {
    const response = await fetch(`/api/products/deleteProduct/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (!response.ok) {
      console.error(
        "Error deleting product:",
        result.message || "Unknown error",
      );
      return result;
    }
    console.log("Product deleted successfully:", result);
    return result;
  } catch (error) {
    console.error("Network or parsing error:", error);
    throw error;
  }
};
export { deleteProduct };
