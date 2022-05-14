import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import {
  getOrdersThunk,
} from "../../features/orderSlice/orderSlice";
import "./OrdersList.css";

// localStorage.setItem('ordersArray', JSON.stringify(orders))
// const orders= JSON.parse(localStorage.getItem('ordersArray'))

const OrdersList = () => {
  const dispatch = useDispatch();
  const ordersList = useSelector((state) => state?.orderSlice?.orders);
  const { orders } = ordersList;
  console.log(orders);

  const {isFetching} = useSelector((state) => state?.orderSlice?.isFetching)

  useEffect(async () => {
    dispatch(getOrdersThunk());
  }, []);

  return (
    <div>
      {isFetching ? console.log("yes is fetching") : null}
      <table className="ordersListTable-container">
        <thead>
          <tr className="ordersListTable-row">
            <th className="ordersListTable-heading">S.No</th>
            <th className="ordersListTable-heading">Full Name</th>
            <th className="ordersListTable-heading">Email</th>
            <th className="ordersListTable-heading">Contact</th>
            <th className="ordersListTable-heading">Postal Code</th>
            <th className="ordersListTable-heading">Address</th>
            <th className="ordersListTable-heading">Products</th>
          </tr>
        </thead>
        {orders?.map((row, i) => {
          return (
            <tbody>
              <tr className="ordersListTable-row">
                <td className="ordersListTable-data">{i}</td>
                <td className="ordersListTable-data">{row.fullName}</td>
                <td className="ordersListTable-data">{row.email}</td>
                <td className="ordersListTable-data">{row.contact}</td>
                <td className="ordersListTable-data">{row.postalCode}</td>
                <td className="ordersListTable-data">{row.address}</td>
                <td className="ordersListTable-data">
                  <thead>
                    <tr className="productListTable-row">
                      <th className="productListTable-heading">Name</th>
                      <th className="productListTable-heading">Qty.</th>
                      <th className="productListTable-heading">Flavour</th>
                      <th className="productListTable-heading">Weight</th>
                    </tr>
                  </thead>
                  {row.products.map((product) => {
                    return (
                      <tbody>
                        <tr className="productsListTable-row">
                          <td className="productsListTable-data">
                            {product.name}
                          </td>
                          <td className="productsListTable-data">
                            {product.quantity}
                          </td>
                          <td className="productsListTable-data">
                            {product.flavour}
                          </td>
                          <td className="productsListTable-data">
                            {product.weight}
                          </td>
                          
                        </tr>
                      </tbody>
                    );
                  })}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default OrdersList;
