import React, { useState } from "react";
import axios from "axios";
import View from './View';
import "./App.css";

const App = () => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState(null);

  const data = {
    productId:productId,
    productName:productName,
    cost:cost,
    quantity:quantity
  };


  const Submit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:8000/product',data,amount)
    console.log('data',data)
    countAmount()
    window.location.reload(false);
  }

  const countAmount = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Generates random number between 1 and 100
    setAmount(randomNum);
  };



  return (
    <div>
      <form>
        <div>
          <label>
            Product ID
            <input value={productId} type="number"  name="ProductId" required onChange={(e) => setProductId(e.target.value)}/>
          </label>
          <br />
          <label>
            Product Name
            <input  value={productName} type="text" name="ProductName" required onChange={(e) => setProductName(e.target.value)}/>
          </label>
          <br />
          <label>
            Cost
            <input value={cost} type="number"  name="Cost" required onChange={(e) => setCost(e.target.value)}/>
          </label>
          <br />
          <label>
            Quantity
            <input value={quantity} type="number"  name="Quantity" required onChange={(e) => setQuantity(e.target.value)}/>
          </label>
        </div>

        <button style={{backgroundColor:'green', color:'white', margin:0, position:'absolute', left:'50%'}} type="submit" onClick={Submit}>
          Add
        </button>
      </form>

    <View />

    

    </div>
  );
};

export default App;
