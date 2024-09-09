import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageContainer from "../Common/PageContainer";
import breedcrumb from "../../assets/imgs/breedcrumb.jpg";
import apple from "../../assets/imgs/apple.png";
import orange from "../../assets/imgs/orange.png";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "../../Styles/cart.css";

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Green Apple', price: 14.00, quantity: 5, image: apple }, 
    { id: 2, name: 'Fresh Orange', price: 14.00, quantity: 5, image: orange },
  ]);
  const [coupon, setCoupon] = useState('');
  const navigate = useNavigate();

  const updateQuantity = (id, delta) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return {...item, quantity: Math.max(0, item.quantity + delta)};
      }
      return item;
    }));
  };

  const applyCoupon = () => {
    console.log('Applying Coupon:', coupon);
  };

  const { subtotal, total } = useMemo(() => {
    const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const shipping = 0;
    const total = subtotal + shipping;
    return { subtotal, total };
  }, [items]);

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
              Shopping Cart
            </li>
          </ul>
        </div>
        </div>
        <div className="flex justify-center py-7">
            <h2 className="font-bold text-3xl">My Shopping Cart</h2>
          </div>
        <section className="flex justify-evenly p-5"> 
        <div className="cart-section w-[60%]">
         
          <div className="product-table">
            <table className="border border-collapse w-full mx-auto">
              <thead>
                <tr>
                  <th scope="col" className="card-table-title">PRODUCT</th>
                  <th scope="col" className="card-table-title">PRICE</th>
                  <th scope="col" className="card-table-title">QUANTITY</th>
                  <th scope="col" className="card-table-title">SUBTOTAL</th>
                  <th scope="col" className="card-table-title"></th>
                </tr>
              </thead>
              <tbody className="table-body">
                {items.map(item => (
                  <tr key={item.id}>
                    <td className="flex gap-2 items-center">
                      <img src={item.image} alt={item.name} width={"100px"} height={"100px"} />
                      <p>{item.name}</p>
                    </td>
                    <td className="text-center">&#36;{item.price.toFixed(2)}</td>
                    <td className="text-center">
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span> {item.quantity} </span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </td>
                    <td className="text-center">&#36;{(item.quantity * item.price).toFixed(2)}</td>
                    <td>
                      <button>
                        <IoMdCloseCircleOutline className="text-2xl text-[#808080]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cart-table-action-btn w-full flex justify-between items-center p-4">
              <button className="btn w-[180px] bg-gray-200 p-3 rounded-full" onClick={() => navigate('/')}>Return To Shop</button>
              <button className="btn w-[180px] bg-gray-200 p-3 rounded-full" onClick={() => console.log('Updating Cart')}>Update To Cart</button>
            </div>
          </div>
          <div className="relative coupon-section flex items-center justify-between my-5 p-6">
            <h2 className="text-2xl font-bold">Coupon Code </h2>
            <div className="coupon-input-box flex overflow-hidden w-[70%] p-3">
                <input
                type="text"
                placeholder="Enter Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="coupon-input w-[70%]  focus:outline-none focus:ring-0 "
              />
              <button className="absolute w-[170px] p-3 top-6 right-4 z-10 btn apply-coupon bg-black text-white rounded-full" onClick={applyCoupon}>Apply Coupon</button></div>
            </div>
        </div>
        <div className="order-summary w-[30%] h-[270px] p-5">
          <div className="text-xl font-bold mb-3">Order Summary</div>
          <div className="order-summary-details">
            <div className="flex justify-between mb-4">
              <span>Subtotal:</span>
              <span>&#36;{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping:</span>
              <span>{subtotal > 50 ? 'Free' : '+&#36;5.00'}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>&#36;{(subtotal > 50 ? subtotal : subtotal + 5.00).toFixed(2)}</span>
            </div>
            <div className="place-order flex items-center justify-center">
            <button className="w-[90%] h-auto text-center mt-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
            Proceed to checkout</button>
            </div>
          </div>
        </div>
        </section>
        
    </PageContainer>
  )
}

export default Cart;
