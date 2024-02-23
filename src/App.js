
import React, { useState } from 'react';
import './App.css';


function App() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);

  const calculateDiscount = () => {
    if (originalPrice && discountPercentage) {
      const discountedAmount = (originalPrice * discountPercentage) / 100;
      const calculatedFinalPrice = originalPrice - discountedAmount;
      setFinalPrice(calculatedFinalPrice.toFixed(2));
    }
  };
  return (
    <div className="discount-calculator-container">
      <div className="background-image"></div>
      <div className="calculator-content">
        <h2 className="calculator-title">Discount Calculator</h2>
        <div className="calculator-form">
          <label htmlFor="originalPrice">Original Price:</label>
          <input
            type="number"
            id="originalPrice"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
          />

          <label htmlFor="discountPercentage">Discount Percentage:</label>
          <input
            type="number"
            id="discountPercentage"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
          />

          <button onClick={calculateDiscount}>Calculate Discount</button>
        </div>

        {finalPrice !== null && (
          <div className="result-container">
            <h3>Final Price after Discount:</h3>
            <p>${finalPrice}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
