import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  // 🧩 Load user data safely
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users[0] || { favorite: [] };

  // 🗂 State
  const [favorites, setFavorites] = useState(user.favorite || []);
  const [later, setLater] = useState([]); // IDs of saved for later

  // 💾 Toggle Save for Later / Move Back
  const SaveforLater = (id) => {
    setLater((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // 🗑 Delete item
  const deleteItem = (id) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);

    // Remove from later if needed
    setLater((prev) => prev.filter((x) => x !== id));

    // Persist
    if (users[0]) {
      users[0].favorite = updatedFavorites;
      localStorage.setItem("users", JSON.stringify(users));
    }
  };

  // 🔍 Filtered arrays for display
  const displayedFavorites = favorites.filter((item) => !later.includes(item.id));
  const laterProducts = favorites.filter((item) => later.includes(item.id));


  const CheckoutNow = ()=>{
    const user = users[0]; // current user

    if (user) {
      if (!user.checkout) {
        user.checkout = []
        
      }
      user.checkout = [...displayedFavorites];
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/checkout");
    }

  }

  return (
    <div className="w-screen p-10 text-black">

      <button
      onClick={()=> CheckoutNow()}
      >Checkout</button>

      {/* 🛒 Favorites Section */}
      {displayedFavorites.length > 0 ? (
        displayedFavorites.slice().reverse().map((fav, index) => (
          <div key={index} className="w-full h-full flex mb-4">
            <div className="flex w-1/2 justify-center items-center h-80 bg-white">
              <img
                onClick={() => navigate(`/search/${fav.title}/${fav.id}`)}
                className="p-10 cursor-pointer"
                src={fav.img}
                alt={fav.title}
              />
            </div>

            <div className="w-full h-80 bg-white text-black p-6 space-y-2">
              <p className="text-xl font-semibold">{fav.title}</p>
              <p className="p-1 text-center bg-red-700 text-white rounded w-35">
                Limited time deal
              </p>
              <p className="text-sm text-gray-500">₹{fav.price * 80}</p>
              <p className="text-md">{fav.ship}</p>
              <p className="text-md">{fav.stock}</p>

              <div className="space-x-4">
                <button onClick={() => deleteItem(fav.id)} className="text-md">
                  Delete
                </button>
                <button onClick={() => SaveforLater(fav.id)} className="text-md">
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No favorites yet!</p>
      )}

      {/* 💾 Later Section */}
      {laterProducts.length > 0 && (
        <div className="border border-red-500 mt-6 p-4">
          <h2 className="text-lg font-semibold mb-4">Saved for Later</h2>
          {laterProducts.slice().reverse().map((fav, index) => (
            <div key={index} className="w-full h-full flex mb-4">
              <div className="flex w-1/2 justify-center items-center h-80 bg-white">
                <img
                  onClick={() => navigate(`/search/${fav.title}/${fav.id}`)}
                  className="p-10 cursor-pointer"
                  src={fav.img}
                  alt={fav.title}
                />
              </div>

              <div className="w-full h-80 bg-white text-black p-6 space-y-2">
                <p className="text-xl font-semibold">{fav.title}</p>
                <p className="p-1 text-center bg-red-700 text-white rounded w-35">
                  Limited time deal
                </p>
                <p className="text-sm text-gray-500">₹{fav.price * 80}</p>
                <p className="text-md">{fav.ship}</p>
                <p className="text-md">{fav.stock}</p>

                <div className="space-x-4">
                  <button onClick={() => deleteItem(fav.id)} className="text-md">
                    Delete
                  </button>
                  <button onClick={() => SaveforLater(fav.id)} className="text-md">
                    Move Back
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
