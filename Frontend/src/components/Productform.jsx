import { useState } from "react";
const Productform = () => {
  let [value, updateValue] = useState({
    productName: "",
    productPrice: "",
  });
  function getProductName(event) {
    updateValue({ ...value, productName: event.target.value });
  }
  function getProductPrice(event) {
    updateValue({ ...value, productPrice: event.target.value });
  }
  function handlesubmission() {
    // event.preventDefault();
    // useState({
    //   productName: "",
    //   productPrice: "",
    // });
  }
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center mb-4">Product Form</h1>

            <form onSubmit={handlesubmission} className="border p-4 shadow-sm">
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={value.productName}
                  onChange={getProductName}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">
                  Product Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productPrice"
                  value={value.productPrice}
                  onChange={getProductPrice}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 fs-6 fw-bold text-uppercase rounded-0 border-0"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Productform;
