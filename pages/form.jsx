import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";
import { v4 as uuid } from "uuid";

const initialState = {
  item: "",
  price: 0,
  quantity: 0,
};

const Form = () => {
  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState(initialState);

  const handleChange = (e) => {
    setSingleItem({ ...singleItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      ...singleItem,
    };

    setItems([...items, newItem]);
    setSingleItem(initialState);
  };

  return (
    <>
      <Navbar />
      {/* <div className=" bg-gray-400/30 flex flex-col justify-center items-center mb-2">
        <h3 className=" mt-40 text-3xl mb-7 tracking-widest">
          LET US SHOP FOR YOU 😊
        </h3>

        <form className="mt-5  border-2 max-w-xl w-full p-5 rounded space-y-3">
          <p className=" text-center uppercase  font-bold">
            {" "}
            Send Us Your List
          </p>
          <div className="">
            <label htmlFor="title" className="block">
              <p className="">Name</p>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border w-full p-1 outline-none mt-2 rounded-md"
            />
          </div>

          <div className="">
            <label htmlFor="title" className="block">
              Phone Number
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border w-full p-1 outline-none mt-2 rounded-md"
            />
          </div>
          <div className="">
            <label htmlFor="title" className="block">
              Location
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border w-full p-1 outline-none mt-2 rounded-md"
            />
          </div>

          <div className="">
            <label htmlFor="body" className="block">
              Type your list here
            </label>
            <textarea
              name="body"
              id="body"
              type="text"
              cols="30"
              rows="10"
              className="border w-full p-1 outline-none mt-2 rounded-md"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button className="mt-2 border rounded-md text-yellow-900 shadow-lg py-3 px-8 hover:bg-cyan-500 hover:text-white duration-200 tracking-widest capitalize">
              send
            </button>
          </div>
        </form>
      </div> */}
      <div className="bg-gray-400/30 flex flex-col justify-center items-center mb-40">
        <div className="bg-slate-400 w-full p-10 max-w-2xl mt-40 mb-5 rounded-md">
          <form className="space-y-3 mb-5" onSubmit={handleSubmit}>
            {/* <div>
              <label className="block text-lg" htmlFor="item">
                Item
              </label>
              <input
                className="border w-full p-2"
                type="text"
                name="item"
                id="item"
                value={singleItem.item}
                onChange={handleChange}
              />
            </div> */}

            <label
              htmlFor="item"
              className=" text-lg font-medium text-gray-900 dark:text-gray-700"
            >
              Items / Products
            </label>
            <select
              id="item"
              name="item"
              class="bg-gray-50 border border-gray-300 text-gray-500 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={singleItem.item}
              onChange={handleChange}
            >
              <option selected="">select</option>
              <option value="Milo">Milo</option>
              <option value="Colgate Tooth Paste">Colgate Toothpaste</option>
              <option value="Paree Sanitary Pad">Paree Sanitray Pad</option>
              <option value="Geisha Soap">Geisha Soap</option>
              <option value="Indomie Noodles">Indomie Noodles</option>
              <option value="Yazz Washing Powder">Yazz Washing Powder</option>
              <option value="Lovelyn Body Splash"> Lovelyn Body Splash</option>
              <option value="Nestle Nido">Nestle Nido</option>
              <option value="South African Wine">South African Wine</option>
              <option value="Classic Basmati Rice">Classic Basmati Rice</option>
              <option value="Frytol Cooking Oil">Frytol Cooking Oil</option>
              <option value="Cream Crackers Biscuit">
                Cream Crackers Biscuit
              </option>
            </select>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full">
                <label className="block text-md" htmlFor="price">
                  Price
                </label>
                <input
                  className="border flex-1 p-2 w-full"
                  type="number"
                  name="price"
                  id="price"
                  value={singleItem.price}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label className="block text-md" htmlFor="quantity">
                  Quantity
                </label>
                <input
                  className="border flex-1 p-2 w-full"
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={singleItem.quantity}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="border px-5 py-2 rounded" type="submit">
                Add Item
              </button>
            </div>
          </form>

          <div className="space-y-1">
            <div className="bg-gray-500 text-white grid md:grid-cols-12 p-2 font-semibold rounded">
              <div className="md:col-span-1">#SN</div>
              <div className="md:col-span-7">Items</div>
              <div className="md:col-span-2">Qty</div>
              <div className="md:col-span-2">Price</div>
            </div>
            {items.length === 0 ? (
              <p className="text-center py-3 font-semibold">Submit List</p>
            ) : (
              <>
                {items.map((item, idx) => (
                  <div
                    className="bg-gray-200 grid md:grid-cols-12 p-2 rounded"
                    key={item.id}
                  >
                    <div className="md:col-span-1 pl-2">{idx + 1}</div>
                    <div className="md:col-span-7">{item.item}</div>
                    <div className="md:col-span-2">{item.quantity}</div>
                    <div className="md:col-span-2">GH{item.price}</div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div>
              <button className="border py-2 px-4 rounded w-full mt-5">
                Submit List
              </button>
          </div>
        </div>
      </div>

      <Foot />
    </>
  );
};

export default Form;
