import React from "react";
import "./css/checkout.css";
import { useState } from "react";

function Checkout() {
  const [data, setData] = useState({});
  const [divisionOption, setDivisionOption] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const divisionhandle = (event) => {
    setDivisionOption(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Thank you ${data.fname} ${data.lname}. Your details has been submitted`
    );
    setData(" ");
    setDivisionOption(" ");
  };
  return (
    <div className="checkout_main">
      <div className="checkout_wrap mx-6 sm:mx-2 ">
        <h2>shipping details</h2>
        <form onSubmit={handleSubmit}>
          <div className="checkout_wrap_column grid grid-cols-1 sm:grid-cols-2">
            <div className="checkout_column pb-2 sm:pb-2">
              <label>first name*</label>
              <input
                type="text"
                name="fname"
                value={data.fname || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="checkout_column pb-2 sm:pb-2">
              <label>last name*</label>
              <input
                type="text"
                name="lname"
                value={data.lname || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="checkout_column pb-2 sm:pb-2">
              <label>email*</label>
              <input
                type="email"
                name="email"
                value={data.email || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="checkout_column pb-2 sm:pb-2">
              <label>address*</label>
              <input
                type="text"
                name="address"
                value={data.address || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="checkout_column pb-2 sm:pb-2">
              <label>city*</label>
              <input
                type="text"
                name="city"
                value={data.city || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="checkout_column pb-2 sm:pb-2">
              <label>zipcode*</label>
              <input
                type="number"
                name="zipcode"
                value={data.zipcode || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="checkout_column pb-2 sm:pb-2">
              <label>shipping country</label>
              <select>
                <option value="india">india</option>
                <option value="india">nepal</option>
              </select>
            </div>
            <div className="checkout_column pb-2 sm:pb-2">
              <label>shipping subdivision*</label>
              <select value={divisionOption} onChange={divisionhandle}>
                <option value="patna">bihar</option>
                <option value="delhi">delhi</option>
                <option value="punjab">punjab</option>
                <option value="mumbai">maharatra</option>
                <option value="chennai">keral</option>
              </select>
            </div>
          </div>
          <div className="pay_btn_div">
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
