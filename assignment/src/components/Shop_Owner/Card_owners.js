import React, { useState, useEffect, useRef } from 'react';

export default function Card(props) {
  const [size, setSize] = useState('');
  const priceRef = useRef();
  const options = props.options || [];
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  let finalPrice = 0;
  if (options.length > 0) {
    finalPrice = parseInt(options.find(option => option.size === size)?.price || options[0].price);
  }

  return (
    <div>
      <div className="card mt-3 rounded" style={{ width: '20rem', maxHeight: '310px', borderRadius: '50px' }}>
        <img src={props.ImgSrc} className="card-img-top" alt="Not visible" style={{ height: '180px', objectFit: 'fill' }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <div className="container w-100">
            <select ref={priceRef} className="m-2 h-100 bg-success rounded" value={size} onChange={handleSizeChange}>
              {options.map((option, index) => (
                <option key={index} value={option.size}>
                  {option.size}
                </option>
              ))}
            </select>
            <div className="d-inline h-100 fs-6"> Rs.{finalPrice} /- </div>
          </div>
        </div>
      </div>
    </div>
  );
}
