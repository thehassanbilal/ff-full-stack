import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersThunk, orderListData } from "../../features/orderSlice/orderSlice";
import { getSelectedProductThunk } from "../../features/productSlice";
import "./OrdersList.css";

const rows = [
  {
    name: "Hassan Bilal",
    email: "hassan@gmail.com",
    contact: "03324710803",
    postalCode: 24344,
    address: "44 Ex parkview DHA Ph8",
    products: [
      {
        productId: "C4",
        quantity: 4,
      },
      {
        productId: "Cretein",
        quantity: 5,
      },
    ],
  },
  {
    name: "Hassan Bilal",
    email: "hassan@gmail.com",
    contact: "03324710803",
    postalCode: 24344,
    address: "44 Ex parkview DHA Ph8",
    products: [
      {
        productId: "C4",
        quantity: 4,
      },
      {
        productId: "Cretein",
        quantity: 5,
      },
      {
        productId: "C4",
        quantity: 4,
      },
      {
        name: "Cretein",
        quantity: 5,
      },
    ],
  },
]

// localStorage.setItem('ordersArray', JSON.stringify(orders))
// const orders= JSON.parse(localStorage.getItem('ordersArray'))

const OrdersList = () => {
  const dispatch = useDispatch();
  const ordersList = useSelector((state) => state?.orderSlice?.orders);
  const {orders} = ordersList;

  console.log(orders);

  useEffect(async () => {
    dispatch(getOrdersThunk());
    dispatch(getSelectedProductThunk(ordersList.orders.id))
  }, []);

  return (
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
                  </tr>
                </thead>
                {row.products.map((product) => {
                  return (
                    <tbody>
                      <tr className="productsListTable-row">
                        <td className="productsListTable-data">
                          {product.productId}
                        </td>
                        <td className="productsListTable-data">
                          {product.quantity}
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
  );
};

export default OrdersList;
