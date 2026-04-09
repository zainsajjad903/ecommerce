import Productform from "../../../components/Productform";

const Producttable = () => {
  return (
    <>
      <Productform />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center mb-4">Product List</h2>

            <div className="table-responsive shadow-sm border">
              <table className="table table-striped table-bordered text-center align-middle mb-0">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Handle</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <button className="btn btn-sm btn-warning me-2">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>

                  <tr>
                    <th>2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                      <button className="btn btn-sm btn-warning me-2">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>

                  <tr>
                    <th>3</th>
                    <td>John</td>
                    <td>Doe</td>
                    <td>@social</td>
                    <td>
                      <button className="btn btn-sm btn-warning me-2">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Producttable;
