import React from "react";
import PageContainer from "../Common/PageContainer";
import apple from "../../assets/imgs/apple.png";
import orange from "../../assets/imgs/orange.png";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "../../Styles/wishlist.css";

const Wishlist = () => {
  return (
    <PageContainer>
      <section>
        <div className="flex justify-center py-7">
          <h2 className="font-bold text-3xl">My Wishlist</h2>
        </div>
        <div>
          <div className="product-table">
            <table className="border border-collapse w-[80%] mx-auto">
              <thead>
                <tr>
                  <th scope="col" className="card-table-title">
                    PRODUCT
                  </th>
                  <th scope="col" className="card-table-title">
                    PRICE
                  </th>
                  <th scope="col" className="card-table-title">
                    STOCK STATUS
                  </th>
                  <th scope="col" className="card-table-title"></th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td className="flex gap-2 items-center">
                    <div>
                      <img
                        src={apple}
                        alt="apple"
                        width={"100px"}
                        height={"100px"}
                      />
                    </div>
                    <div>
                      <p>Green Apple</p>
                    </div>
                  </td>
                  <td>
                    <p>
                      &#36;14.99
                      <del className="text-[#808080] line-through ms-2">
                        20.99
                      </del>
                    </p>
                  </td>
                  <td className="ps-14">
                    <div className="w-[100px] h-[32px] p-[10px] br-6 in-stock">
                      <p className="text-center flex items-center justify-center h-3">
                        In Stock
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="add-to-cart-table">
                      <button className="flex gap-1 items-center add-to-cart-wishlist">
                        <span className="flex items-center text-center ms-8">
                          Add To Cart
                        </span>
                      </button>
                      <button>
                        <IoMdCloseCircleOutline className="text-2xl text-[#808080]" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="flex gap-2 items-center">
                    <div>
                      <img
                        src={orange}
                        alt="apple"
                        width={"100px"}
                        height={"100px"}
                      />
                    </div>
                    <div>
                      <p>Fresh Orange</p>
                    </div>
                  </td>
                  <td>
                    <p>
                      &#36;14.99
                      <del className="text-[#808080] line-through ms-2">
                        20.99
                      </del>
                    </p>
                  </td>
                  <td className="ps-14">
                    <div className="w-[100px] h-[32px] p-[10px] br-6 in-stock">
                      <p className="text-center flex items-center justify-center h-3">
                        In Stock
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="add-to-cart-table">
                      <button className="flex gap-1 items-center add-to-cart-wishlist">
                        <span className="flex items-center text-center ms-8">
                          Add To Cart
                        </span>
                      </button>
                      <button>
                        <IoMdCloseCircleOutline className="text-2xl text-[#808080]" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="flex gap-2 items-center">
                    <div>
                      <img
                        src={orange}
                        alt="apple"
                        width={"100px"}
                        height={"100px"}
                      />
                    </div>
                    <div>
                      <p>Fresh Orange</p>
                    </div>
                  </td>
                  <td>
                    <p>
                      &#36;14.99
                      <del className="text-[#808080] line-through ms-2">
                        20.99
                      </del>
                    </p>
                  </td>
                  <td className="ps-14">
                    <div className="w-[120px] h-[32px] p-[10px] br-6 out-of-stock">
                      <p className="text-center flex items-center justify-center h-3">
                        Out Of Stock
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="add-to-cart-table">
                      <button className="flex gap-1 items-center add-to-cart-wishlist">
                        <span className="flex items-center text-center ms-8">
                          Add To Cart
                        </span>
                      </button>
                      <button className="">
                        <IoMdCloseCircleOutline className="text-2xl text-[#808080]" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="product-table-responsive flex items-center flex-col">
            <div className="shopping-card p-3 relative">
              <div className="card-img-wrapper">
                <img src={apple} alt="apple" />
              </div>
              <div className="flex gap-3 py-2 items-center">
                <h6>Green Apple</h6>
                <div className="w-[100px] h-[32px] p-[10px] br-6 in-stock">
                  <p className="text-center flex items-center justify-center h-3">
                    In Stock
                  </p>
                </div>
              </div>
              <div className="flex justify-center w-[80%] py-2">&#36;45.00</div>
              <div>
                <button className="flex gap-1 items-center add-to-cart-wishlist">
                  <span className="flex items-center text-center ms-8">
                    Add To Cart
                  </span>
                </button>
              </div>
              <div className="absolute top-[24px] left-[100%]">
                <button className="">
                  <IoMdCloseCircleOutline className="text-2xl text-[#808080]" />
                </button>
              </div>
            </div>
            <div className="shopping-card p-3 relative">
              <div className="card-img-wrapper">
                <img src={orange} alt="fruit" />
              </div>
              <div className="flex gap-3 py-2 items-center">
                <h6>Green Apple</h6>
                <div className="w-[100px] h-[32px] p-[10px] br-6 in-stock">
                  <p className="text-center flex items-center justify-center h-3">
                    In Stock
                  </p>
                </div>
              </div>
              <div className="flex justify-center w-[80%] py-2">&#36;45.00</div>
              <div>
                <button className="flex gap-1 items-center add-to-cart-wishlist">
                  <span className="flex items-center text-center ms-8">
                    Add To Cart
                  </span>
                </button>
              </div>
              <div className="absolute top-[24px] left-[100%]">
                <button className="">
                  <IoMdCloseCircleOutline className="text-2xl text-[#808080]" />
                </button>
              </div>
            </div>
            <div className="shopping-card p-3 relative">
              <div className="card-img-wrapper">
                <img src={orange} alt="fruit" />
              </div>
              <div className="flex gap-3 py-2 items-center">
                <h6>Green Apple</h6>
                <div className="w-[120px] h-[32px] p-[10px] br-6 out-of-stock">
                  <p className="text-center flex items-center justify-center h-3">
                    Out Of Stock
                  </p>
                </div>
              </div>
              <div className="flex justify-center w-[80%] py-2">&#36;45.00</div>
              <div>
                <button className="flex gap-1 items-center add-to-cart-wishlist">
                  <span className="flex items-center text-center ms-8">
                    Add To Cart
                  </span>
                </button>
              </div>
              <div className="absolute top-[24px] left-[100%]">
                <button className="">
                  <IoMdCloseCircleOutline className="text-2xl text-[#808080]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Wishlist;
