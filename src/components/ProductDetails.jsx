import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();

    const [product, setProduct] = useState([]);

        const users = JSON.parse(localStorage.getItem("users"));


    useEffect(() => {
        const searchResults = async () => {
            try {
                const searchApi = await fetch(`https://dummyjson.com/products/${id}`);
                const resultData = await searchApi.json();
                setProduct(resultData);
                console.log(resultData);
            } catch (error) {
                console.log("No products found...");
            }
        };

        searchResults();
    }, [id]);



    function addtoCart(id) {
        const pID = id;
        alert(pID);

        if (pID) {
            alert(users[0].username);
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

                    alert("hogya dd");
                    console.log(users[0].favorite);
                } catch (error) {
                    console.log("No products found...");
                }
            };
            searchResults();
        }
    }


    return (
            <div className="flex md:flex-row justify-center items-start gap-8 p-8 bg-gray-50 text-gray-900">
                {/* Left Side: Image Gallery */}
                <div className="flex items-center justify-center gap-8 w-[50%] h-[520px] bg-white">
                    {/* Thumbnail List */}
                    <div className="flex flex-col gap-2">
                        {(product?.images || []).map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={product.title}
                                className="w-15 h-15 object-cover border border-gray-300 rounded-md cursor-pointer hover:border-blue-500"
                            />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className=" bg-white p-4">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-120 h-120 object-contain"
                        />
                    </div>
                </div>

                {/* Right Side: Product Details */}
                <div className="flex flex-col space-y-4 w-[800px] bg-white p-6 rounded-lg shadow-sm">
                    {/* Title */}
                    <h1 className="text-2xl font-semibold">{product.title}</h1>

                    {/* Brand */}
                    <p className="text-blue-600 text-sm hover:underline cursor-pointer">
                        Visit the {product.brand} Store
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-yellow-500 text-lg">★</span>
                        <span>{product.rating} out of 5 stars</span>
                    </div>

                    {/* Deal Section */}
                    <div className="border-t pt-4">
                        <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded-md font-medium mb-2">
                            Limited time deal
                        </span>

                        <div className="flex items-baseline gap-2">
                            <span className="text-red-600 font-bold text-xl">
                                -{product.discountPercentage}%
                            </span>
                            <span className="text-3xl font-bold text-gray-900">₹ {(product.price * 80).toFixed(1)}</span>
                        </div>

                        <p className="text-sm text-gray-500">
                            M.R.P: <span className="line-through">₹{(((product.price / 100 * 80) * (product.discountPercentage)) + (product.price * 80)).toFixed(2) }</span>
                        </p>

                        <p className="text-sm text-gray-500">Inclusive of all taxes</p>
                    </div>

                    {/* Shipping / Policy */}
                    <div className="text-sm text-gray-600 space-y-1">
                        <p>
                            Availability:{" "}
                            <span className="text-green-600 font-medium">
                                {product.availabilityStatus}
                            </span>
                        </p>
                        <p>Shipping: {product.shippingInformation}</p>
                        <p>Return Policy: {product.returnPolicy}</p>
                        <p>Warranty: {product.warrantyInformation}</p>

                        <button 
                onClick={(e)=> addtoCart(product.id)}

                className='text-md'>Add to cart</button>
                    </div>

                    {/* Offers Section */}
                    <div className="border-t pt-4 space-y-2">
                        <p className="font-semibold">Offers</p>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="border rounded-md p-3">
                                <p className="font-medium">No Cost EMI</p>
                                <p>Upto ₹323.79 EMI savings</p>
                            </div>
                            <div className="border rounded-md p-3">
                                <p className="font-medium">Cashback</p>
                                <p>Upto ₹173 cashback on Amazon Pay</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ProductDetails;
