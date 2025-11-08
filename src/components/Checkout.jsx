import React, { useEffect, useState } from "react";

const Checkout = () => {
  const [checkoutItems, setCheckoutItems] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users[0]; // Assuming first user is logged in

    if (user?.checkout) {
      setCheckoutItems(user.checkout);
    }
  }, []);

  const calculateTotal = () => {
    return checkoutItems.reduce((acc, item) => acc + item.price * 80, 0).toFixed(2);
  };

  return (
    <div className="w-screen mx-auto p-8 bg-white text-black rounded shadow">
      <h1 className="text-3xl font-semibold mb-6">
        Checkout ({checkoutItems.length} item{checkoutItems.length !== 1 ? "s" : ""})
      </h1>

      {/* Delivery Address Section */}
      <section className="mb-8">
        <h2 className="font-semibold text-xl mb-2">1 Delivery address</h2>
        <div className="border border-gray-200 p-4 rounded">
          <p>Amrit Anandh</p>
          <p>123 Street Name, City, State, 12345</p>
          <button className="rounded-xl mt-2">Change</button>
        </div>
      </section>

      {/* Payment Method Section */}
      <section className="mb-8">
        <h2 className="font-semibold text-xl mb-2">2 Payment method</h2>
        <div className="border border-gray-200 p-4 rounded">
          <p>Visa ending in 1234</p>
          <p>Billing Address: 123 Street Name, City, State, 12345</p>
          <button className="rounded-xl mt-2">Change</button>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Add a gift card or promotion code"
              className="border border-gray-200 p-2 rounded w-72"
            />
            <button className="ml-2 bg-gray-300 px-3 py-1 rounded-lg">Apply</button>
          </div>
        </div>
      </section>

      {/* Review Items and Delivery Section */}
      <section className="mb-8">
        <h2 className="font-semibold text-xl mb-2">3 Review items and delivery</h2>

        <div className="border border-gray-200 p-4 rounded space-y-6">
          <p className="bg-blue-50 border border-blue-300 p-3 rounded text-blue-800">
            Important message<br />
            <label className="inline-flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              Check this box to default to this delivery address in the future.
            </label>
          </p>

          {/* Map over checkout items */}
          {checkoutItems.map((item, idx) => (
            <div key={item.id} className="flex space-x-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="line-through text-gray-500">
                  ₹{(item.price * 100).toFixed(2)}
                </p>
                <p className="text-lg font-semibold text-red-600">
                  ₹{(item.price * 80).toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">{item.ship}</p>
                <p className="text-sm text-green-600">{item.stock}</p>
                <p>Qty: 1</p>
                <button className="rounded-xl mt-1">Add gift options</button>
              </div>
            </div>
          ))}

          <p className="text-sm text-gray-500">
            Delivery date: 2 Dec 2021<br />
            If you order in the next 13 hours and 53 minutes (Details)
          </p>
          <p>Items dispatched by Amazon</p>
        </div>
      </section>

      {/* Order Summary Section */}
      <section className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <p className="mb-2">
          Items: ₹{calculateTotal()}
        </p>
        <p className="mb-2">Delivery: ₹0.00</p>
        <p className="text-xl font-bold">
          Order Total: ₹{calculateTotal()}
        </p>
        <p className="text-green-600">Your Savings: ₹800.00 (40%)</p>
        <p>Item discount</p>
        <button className="mt-6 bg-yellow-400 text-black font-semibold py-3 px-6 rounded">
          Place Your Order and Pay
        </button>
      </section>
    </div>
  );
};

export default Checkout;
