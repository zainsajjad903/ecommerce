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
      <div>
        <form onSubmit={handlesubmission}>
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
        </form>
      </div>
    </>
  );
};
export default Productform;
