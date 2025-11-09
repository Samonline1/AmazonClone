import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Bounce } from "react-toastify";


const SearchResults = () => {
    const { name } = useParams();
    console.log(name);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const searchResults = async () => {
            try {
                const searchApi = await fetch(
                    `https://dummyjson.com/products/search?q=${name}`
                );
                const resultData = await searchApi.json();
                setProducts(resultData.products);
                console.log(resultData.products);
            } catch (error) {
                console.log("No products found...");
            }
        };

        searchResults();
    }, [name]);

    const navigate = useNavigate();

    let users = JSON.parse(localStorage.getItem("users")) || {
        username: "guest",
        favorite: [],
    };

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
                    console.log(cart.title);

                    if (!users[0].favorite) users[0].favorite = [];

                    users[0].favorite.push(cart);

                    localStorage.setItem("users", JSON.stringify(users)); // object to json srting

  toast.success('Added to cart!', {
position: "bottom-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: false,
progress: undefined,
theme: "light",
transition: Bounce,
});                    console.log(users[0].favorite);
                } catch (error) {
                    console.log("No products found...");
                }
            };
            searchResults();
        }
    }

    return (
        <div className="h-full w-screen m-0">


            {products &&
                products.length > 0 &&
                products.map((product, index) => (
                    <div key={index} className="w-full h-full flex ">
                        <div className="flex w-[50%] justify-center items-center h-80 bg-white">
                            <img
                                onClick={() => navigate(`/search/${name}/${product.id}`)}
                                className="p-10"
                                src={product?.images[0]}
                                alt=""
                                srcSet=""
                            />
                        </div>
                        <div className="w-full h-80 bg-white text-black p-6 space-y-2">
                            <p className="text-xl font-semibold">{product.title}</p>
                            <p className="text-sm">
                                {product.rating} out of 5 stars ({product.reviews.length})
                            </p>
                            <p className="text-md">
                                {product.reviews.length + 2}K+ bought in past month
                            </p>
                            <p className="p-1 text-center bg-red-700 text-white rounded w-35">
                                Limited time deal
                            </p>
                            <p className="text-sm text-gray-500">
                                <span className="text-xl text-black">
                                    ₹{(product.price * 80).toFixed(2)}
                                </span>{" "}
                                M.R.P:{" "}
                                <span className="line-through text-gray-500">
                                    {(
                                        (product.price / 100) * 80 * product.discountPercentage +
                                        product.price * 80
                                    ).toFixed(2)}{" "}
                                </span>{" "}
                                <span className="text-black">
                                    {product.discountPercentage}% off
                                </span>
                            </p>
                            <p className="text-md">{product.shippingInformation}</p>
                            <button
                                onClick={(e) => addtoCart(product.id)}
                                className="text-md rounded-3xl"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default SearchResults;
