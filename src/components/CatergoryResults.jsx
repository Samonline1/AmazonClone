import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";


import { useNavigate, useParams } from "react-router-dom";
import { Bounce, Slide } from "react-toastify";

const CategoryResults = () => {
  const users = JSON.parse(localStorage.getItem("users"));

  const { name } = useParams();

  const [products, setProducts] = useState([]);
  console.log(name);

  useEffect(() => {
  const searchResults = async () => {
    try {
      const result = await toast.promise(
        fetch(`https://dummyjson.com/products/category/${name}`)
          .then(res => res.json()),
        {
          loading: 'Loading products...',
          error: 'Failed to load products 😞',
          success: 'Products loaded successfully 🛒',
          
        }
      );

      setProducts(result.products);
    } catch (error) {
      console.log("No products found...");
    }
  };

  searchResults();
}, [name]);


  // useEffect(() => {
  //   const searchResults = async () => {
  //     try {
  //       const searchApi = await fetch(
  //         `https://dummyjson.com/products/category/${name}`
  //       );
  //       const resultData = await searchApi.json();
  //       setProducts(resultData.products);
  //       // console.log(resultData);

  //        toast.promise(searchApi, {
  //   loading: 'Adding item to cart...',
  //   success: 'added successfully! 🛒',
  //   error: 'Failed to add item 😞',
  // });

  //     } catch (error) {
  //       console.log("No products found...");
  //     }
  //   };

  //   searchResults();
  // }, [name]);

  const navigate = useNavigate();

  const [filters, setFilters] = useState([]);
  const [filData, setFilData] = useState();


  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;
    console.log(checked);
    console.log(value);
    console.log(filters);

    const updatedFilters = checked
      ? [...filters, value] // addd new filter whenn checked
      : filters.filter((f) => f !== value); // remove unchecked one
    setFilters(updatedFilters);
    console.log(updatedFilters);
  };

  useEffect(() => {
    if (filters.length === 0) {
      setFilData(products);
      return;
    }

    const filtered = products.filter((product) => {
      const price = product.price * 80;
      const discount = product.discountPercentage;
      const shipment = product.shippingInformation;

      return filters.some((f) => {
        // price and discount rules
        if (f === "Ships overnight") return shipment === "Ships overnight";
        if (f === "Under ₹1,000") return price < 1000;
        if (f === "₹1,000 - ₹5,000") return price >= 1000 && price <= 5000;
        if (f === "₹5,000 - ₹10,000") return price >= 5000 && price <= 10000;
        if (f === "₹10,000 - ₹20,000") return price >= 10000 && price <= 20000;
        if (f === "Over ₹20,000") return price > 20000;

        // DISCOUNT FILTERS
        if (f === "10% Off or more") return discount >= 10;
        if (f === "25% Off or more") return discount >= 25;
        if (f === "35% Off or more") return discount >= 35;
        if (f === "50% Off or more") return discount >= 50;
        if (f === "60% Off or more") return discount >= 60;
        if (f === "70% Off or more") return discount >= 70;

        return false;
      });
    });

    setFilData(filtered);
    console.log(filtered);
  }, [products, filters]);

  // set filters all data or matches data - wither map all or matches? print onyl that

  function addtoCart(id) {
    const pID = id;

    if (pID) {
      const searchResults = async () => {
        try {
          const searchApi = await fetch(
            `https://dummyjson.com/products/${pID}`
          );
          const resultData = await searchApi.json();
          console.log(resultData);

          const cart = {
            id: resultData.id,
            title: resultData.title,
            price: resultData.price,
            img: resultData.thumbnail,
            stock: resultData.availabilityStatus,
            ship: resultData.shippingInformation,
          };

          if (!users[0].favorite) users[0].favorite = [];

          users[0].favorite.push(cart);

          localStorage.setItem("users", JSON.stringify(users)); // object to json srting

          toast.success("Added to cart!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });

          console.log(users[0].favorite);
        } catch (error) {
          console.log("No products found...");
        }
      };
      searchResults();
    }
  }

  return (
    <div className="flex h-full w-screen m-0 bg-white">
      <div className="w-90 bg-gray-100 p-4 text-black">
        <b>Filter By</b>

        <h3 className="mt-4 font-semibold">Sort by</h3>
        <label className="block">
          <input
            className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 bg-white
                 checked:bg-blue-600 checked:border-blue-600 
                 focus:ring-2 focus:ring-blue-400 cursor-pointer transition-all duration-200"
            type="checkbox"
            value={"Ships overnight"}
            checked={filters.includes("Ships overnight")}
            onChange={handleCheckboxChange}
          />{" "}
          {"Ships overnight"}
        </label>

        <h3 className="mt-2 font-semibold">Price</h3>
        {[
          "Under ₹1,000",
          "₹1,000 - ₹5,000",
          "₹5,000 - ₹10,000",
          "₹10,000 - ₹20,000",
          "Over ₹20,000",
        ].map((label) => (
          <label key={label} className="block">
            <input
              className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 bg-white
                 checked:bg-blue-600 checked:border-blue-600 
                 focus:ring-2 focus:ring-blue-400 cursor-pointer transition-all duration-200"
              type="checkbox"
              value={label}
              checked={filters.includes(label)}
              onChange={handleCheckboxChange}
            />{" "}
            {label}
          </label>
        ))}

        <h3 className="mt-4 font-semibold">Discount</h3>
        {[
          "10% Off or more",
          "25% Off or more",
          "35% Off or more",
          "50% Off or more",
          "60% Off or more",
          "70% Off or more",
        ].map((label) => (
          <label key={label} className="block">
            <input
              className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 bg-white
                 checked:bg-blue-600 checked:border-blue-600 
                 focus:ring-2 focus:ring-blue-400 cursor-pointer transition-all duration-200"
              type="checkbox"
              value={label}
              checked={filters.includes(label)}
              onChange={handleCheckboxChange}
            />{" "}
            {label}
          </label>
        ))}
      </div>

      <div className="w-screen"> 

        {filData && filData.length > 0 ? (
          filData.map((f, index) => (
            // same card structure as before
            <div key={index} className="w-full flex ">
              <div className="flex w-[50%] justify-center items-center h-80 w-60 bg-white">
                <img
                  onClick={() => navigate(`/search/${name}/${f.id}`)}
                  className="p-5 w-full h-[90%] object-contain"
                  src={f?.images[0]}
                  alt=""
                />
              </div>
              <div className="w-full h-80 bg-white text-black p-6 space-y-2">
                <p className="text-xl font-semibold">{f.title}</p>
                <p className="text-sm">
                  {f.rating} out of 5 stars ({f.reviews.length})
                </p>
                <p className="text-md">
                  {f.reviews.length + 2}K+ bought in past month
                </p>
                <p className="p-1 text-center bg-red-700 text-white rounded w-35">
                  Limited time deal
                </p>
                <p className="text-sm text-gray-500">
                  <span className="text-xl text-black">
                    ₹{(f.price * 80).toFixed(2)}
                  </span>
                  M.R.P:{" "}
                  <span className="line-through text-gray-500">
                    {(
                      (f.price / 100) * 80 * f.discountPercentage +
                      f.price * 80
                    ).toFixed(2)}
                  </span>
                  <span className="text-black">
                    {f.discountPercentage}% off
                  </span>
                </p>
                <p className="text-md">{f.shippingInformation}</p>
                <button onClick={(e) => addtoCart(f.id)} className="text-md rounded-3xl"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))
        ) : (

          <div className="flex items-end justify-center h-120 bg-white">
            <img className="relative object-cover h-100" 
            src="https://m.media-amazon.com/images/I/414+fl1oaTL._SY300_SX300_QL70_FMwebp_.jpg" 
            alt="" srcSet="" />
            <div className="mb-40">

            
            <p className="text-black font-bold text-2xl ">No product found!</p>
            <p className="text-gray-300">No products found on searched term!</p>
          </div>
          </div>

        
        )}

      </div>
    </div>
  );
};

export default CategoryResults;
