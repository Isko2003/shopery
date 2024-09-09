import React, { useMemo, useState } from "react";
import PageContainer from "../Common/PageContainer";
import breedcrumb from "../../assets/imgs/breedcrumb.jpg";
import apple from "../../assets/imgs/apple.png";
import orange from "../../assets/imgs/orange.png";
import "../../Styles/cart.css";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
    // const { subtotal, total } = useMemo(() => {
    //     const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    //     const shipping = 0;
    //     const total = subtotal + shipping;
    //     return { subtotal, total };
    //   }, [items])

  const [formdata, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: '',
    state: '',
    zip: '',
    phone: '',
    shipToDifferentAddress: false,
    orderNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <PageContainer>
        <div 
          className=" flex justify-center items-center bg-cover bg-center bg-no-repeat h-[15vh] w-full"
          style={{
          backgroundImage: `url(${breedcrumb}) `,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
            <div className="w-[80%] ">
          <ul className="flex justify-start items-center gap-4">
            <li className="text-[rgb(128,128,128)] text-[22px]">
              <Link to={"/"}>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8L9 1L17 8V18H12V14C12 13.2044 11.6839 12.4413 11.1213 11.8787C10.5587 11.3161 9.79565 11 9 11C8.20435 11 7.44129 11.3161 6.87868 11.8787C6.31607 12.4413 6 13.2044 6 14V18H1V8Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </Link>
            </li>
            <li className="text-[rgb(128,128,128)] text-[22px]"></li>
            <li className="text-[rgb(15,120,10)] font-medium text-[20px]">
              CheckOut
            </li>
          </ul>
        </div>
        </div>
        <div className="block lg:flex justify-evenly p-6">
    <div className="billing-info w-[100%] lg:w-[60%] pr-4">
      <h2 className="text-2xl font-bold mb-4">Billing Information</h2>
      <form>
        <div className="billing_content-card grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">
         <div className="col-span-3 lg:col-span-1 mb-2">
            <label htmlFor="firstName">FirstName</label>
             <input 
            className="w-full border border-inherit rounded-lg outline-none focus:outline-green-500 p-2" 
            type="text" placeholder="Your first name"  
            name="firstName"
            />
        </div>
        <div className="col-span-3 lg:col-span-1 mb-2">
            <label htmlFor="firstName">LastName</label>
             <input 
            className="w-full border border-inherit rounded-lg outline-none focus:outline-green-500 p-2" 
            type="text" placeholder="Your last name"  
            name="firstName"
            />
        </div>
        <div className="col-span-3 lg:col-span-1 mb-2">
            <label htmlFor="firstName">Company Name</label>
             <input 
            className="w-full border border-inherit rounded-lg outline-none focus:outline-green-500 p-2" 
            type="text" placeholder="Your company name"  
            name="firstName"
            />
        </div>
        <div className="col-span-3 mb-2">
            <label htmlFor="orderNotes">Street Address</label>
        <input
            className="w-full border border-inherit rounded-lg outline-none focus:outline-green-500 p-2"
            placeholder="Your address"
            name="address"
          />
        </div> 
          <div className="col-span-3 lg:col-span-1 mb-2">
            <label htmlFor="firstName">Country / Region</label>
             <select 
            className="w-full border border-inherit rounded-lg outline-none focus:outline-green-500 p-2" 
            type="text" placeholder="Your first name"  
            name="firstName"
            >
            <option value="Us">United States</option>
            <option value="Canada">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="Bangladesh">Bangladesh</option>
            </select>
        </div>
        <div className="col-span-3 lg:col-span-1 mb-2">
            <label htmlFor="firstName">States</label>
             <select 
            className="w-full border border-inherit rounded-lg outline-none focus:outline-green-500 p-2" 
            type="text" placeholder="Your first name"  
            name="firstName"
            >
            <option value="Washington DC">Washington DC</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Alberta">Alberta</option>
            <option value="Manitoba">Manitoba</option>
            <option value="Dhaka">Dhaka</option>
            </select>
        </div>
        <div className="col-span-3 lg:col-span-1 mb-2">
            <label htmlFor="firstName">Zip code</label>
             <select
            className="w-full border border-inherit rounded-lg outline-none focus:outline-green-500 p-2" 
            type="text" placeholder="Your first name"  
            name="firstName"
            >
                <option value="1216">1216</option>
                <option value="975">975</option>
                <option value="880">880</option>
                <option value="95">95</option>
            </select>
        </div>
        <div className="col-span-3 mb-2 block lg:flex items-center justify-between gap-5">
        <div className="w-full lg:w-[400px]">
        <label htmlFor="firstName">Email</label>
             <input 
            className="w-full border border-inherit rounded-lg outline-none focus:outline-green-500 p-2" 
            type="email" placeholder="Email address"  
            name="firstName"
            />
        </div>
        <div className="w-full lg:w-[400px]">
        <label htmlFor="firstName">Phone</label>
             <input 
            className="w-full border border-inherit rounded-lg outline-none focus:outline-green-500 p-2" 
            type="number" placeholder="Phone number"  
            name="firstName"
            />
        </div>
        </div>
        <div className="col-span-3  mb-2 flex items-center mb-4">
            <input type="checkbox" className="focus:ring-green-500"/>
            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ship To A Different Address</label>
        </div>
        </div>
      </form>
      <div className="billing-info w-[100%] "
      >
        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
        <form>
          <div className="billing_content-card grid grid-cols-3 gap-4 mb-5">
          <div className="col-span-3 row-span-3 mb-2">
            <label htmlFor="orderNotes">Order Notes</label>
        <input
            className="w-full h-full border border-inherit rounded-lg outline-none focus:outline-green-500 p-2"
            placeholder="Notes about your order, e.g. special notes for delivery"
            name="address"
          />
        </div> 
          </div>
        </form>
      </div>
    </div>
    <div className="order-summary w-full lg:w-[30%] h-[570px] p-5">
          <div className="text-xl font-bold mb-3">Order Summary</div>

          <div className="order-summary-details-checkout">
            <div className="bill-card-product">
                <div className="bill-card__product-item flex items-center justify-between">
                    <div className="flex items-center ">
                        <div className="w-[60px] h-[60px]"><img src={apple} alt="" /></div>
                        <h5>Green Apple x5</h5>
                    </div>
                    <span>&#36;70.00</span>
                </div>
                <div className="bill-card__product-item flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-[60px] h-[60px]"><img src={orange} alt="" /></div>
                        <h5>Orange x1</h5>
                    </div>
                    <span>&#36;70.00</span>
                </div>
            </div>
            <div className="flex justify-between my-4">
              <span>Subtotal:</span>
              <span>&#36;84.00</span>
            </div>
            <div className="flex justify-between my-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>&#36;84.00</span>
            </div>
            <div className="text-xl font-bold my-4 ">Payment Method</div>
            <div>
                <div className="flex items-center gap-2 my-3"><input type="radio" className="w-4 h-4"/><label htmlFor="">Cash on Delivery</label></div>
                <div className="flex items-center gap-2 my-3"><input type="radio" className="w-4 h-4"/><label htmlFor="">Paypal</label></div>
                <div className="flex items-center gap-2 my-3"><input type="radio" className="w-4 h-4"/><label htmlFor="">Amazon Pay</label></div>
            </div>
            <div className="place-order flex items-center justify-center">
            <button className="w-[90%] h-auto text-center mt-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
            Place Order</button>
            </div>
          </div>
        </div>
  </div></PageContainer>
    
  );
};

export default CheckoutForm;
