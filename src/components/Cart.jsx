import React from "react";

const Cart = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  function deleteItem (id) {
    const updatedFavorites = user.favorite.filter((item) => item.id !== id);
    localStorage.setItem("user", JSON.stringify(updatedFavorites))
  }

  return (
    <div className="w-screen p-10 text-black">
      {user && user.favorite && user.favorite.length > 0 ? (
        user.favorite.map((fav, index) => (
    //      <div key={index} className="border p-4 mb-2">
    // <img src={fav.img} alt={fav.title} width="100" />
    // <h3>{fav.title}</h3>
    // <p>${fav.price}</p>
  



 <div key={index} className='w-full h-full flex '>
            <div className='flex w-[50%] justify-center items-center h-80 bg-white'>
                <img
                onClick={()=> navigate(`/search/${fav.title}/${fav.id}`)}
                className='p-10'
                 src={fav.img} alt={fav.title} srcSet="" />
            </div>
            <div className='w-full h-80 bg-white text-black p-6 space-y-2'> 
                <p className='text-xl font-semibold'>{fav.title}</p>
                <p className='p-1 text-center bg-red-700 text-white rounded w-35'>Limited time deal</p>
                <p className='text-sm text-gray-500'>₹{fav.price * 80}</p>
                <p className='text-md'>{fav.ship}</p>
                <p className='text-md'>{fav.stock}</p>

                <button
                onClick={(e)=> deleteItem(fav.id)}
                 className='text-md'>delete</button>
            </div>
        </div>




        // </div>


        ))
      ) : (
        <p>No favorites yet!</p>
      )}
    </div>
  );
};

export default Cart;
