import React from "react";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, incrementAsync, selectCount } from "./counterSlice";

export default function Cart() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();

  return (
    <>
      <div className="bg-gray-100 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-10 mt-3">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Products in Cart */}

                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                            alt="Product"
                          />
                          <span className="font-semibold">Product name</span>
                        </div>
                      </td>
                      <td className="py-4">$19.99</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="border rounded-md py-2 px-4 mr-2">
                            -
                          </button>
                          <span className="text-center w-8">1</span>
                          <button className="border rounded-md py-2 px-4 ml-2">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">$19.99</td>
                    </tr>

                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                            alt="Product"
                          />
                          <span className="font-semibold">Product name</span>
                        </div>
                      </td>
                      <td className="py-4">$19.99</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="border rounded-md py-2 px-4 mr-2">
                            -
                          </button>
                          <span className="text-center w-8">1</span>
                          <button className="border rounded-md py-2 px-4 ml-2">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">$19.99</td>
                    </tr>

                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                            alt="Product"
                          />
                          <span className="font-semibold">Product name</span>
                        </div>
                      </td>
                      <td className="py-4">$19.99</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="border rounded-md py-2 px-4 mr-2">
                            -
                          </button>
                          <span className="text-center w-8">1</span>
                          <button className="border rounded-md py-2 px-4 ml-2">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">$19.99</td>
                    </tr>
                    {/* < More product rows  */}
                  </tbody>
                </table>
                <Link to="/">
                <div className="flex items-center justify-center">
                  or <span className="ml-2 text-blue-700 italic">Continue Shopping</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ml-1 text-blue-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
                </Link>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$19.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">$21.98</span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
