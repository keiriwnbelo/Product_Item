import axios from "axios";
import './view.css';
import React, { useState, useEffect } from "react";

const View = () => {
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetch(`http://localhost:8000/product/`)
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        setProduct(product);
        console.log(product);
      })
      .catch((err) => console.error("Error", err))
      .then((response) =>
        console.log(
          "Success",
          "Json - Server",
          JSON.stringify(response, null, 2)
        )
      );
  }, []);

  const Delete = (productId) => {
    axios
      .delete(`http://localhost:8000/product/${productId}`)
      .then((response) => {
        console.log("Data deleted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
    window.location.reload();
  };

  function SumComponent({ product }) {
    // Using reduce function to sum up the 'amount' property from each object in the data array
    const total = product.reduce((acc, currentValue) => acc + product.amount, 0);
  
    return (
      <div>
        <h2>Total Sum: </h2>
      </div>
    );
  }
  return (
    <div>
      <h2>Data Table</h2>
      <table id="customers">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Cost</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.id}>
              <td>{item.productId}</td>
              <td>{item.productName}</td>
              <td>{item.cost}</td>
              <td>{item.quantity}</td>
              <td>{item.amount}</td>
              <td>
                <button style={{backgroundColor:'white', color:'red'}} onClick={() => Delete(item.id)}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
<br/>

    <SumComponent product={product} />
      <button>Save</button>
    </div>
  );
};

export default View;
