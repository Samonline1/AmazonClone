import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const SearchResults = () => {

    const {name} = useParams();
    console.log(name);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const searchResults = async ()=>{
            try {
                const searchApi = await fetch(`https://dummyjson.com/products/search?q=${name}`);
                const resultData = await searchApi.json();
                setProducts(resultData.products)
                console.log(resultData.products);
                
            } catch (error) {
                console.log("No products found...");
            }
        }

        searchResults()
    
    }, [name])

    const navigate = useNavigate();
    
    

  return (
    <div className='h-full w-full m-0 bg-red-900'>


         {/* <div className='w-full h-full flex '>
            <div className='flex w-[50%] justify-center items-center h-80 bg-white'>
                <img
                className='p-10'
                 src="https://m.media-amazon.com/images/I/61egMfcDWlL._AC_UY218_.jpg" alt="" srcSet="" />
            </div>
            <div className='w-full h-80 bg-white text-black p-6 space-y-2'> 
                <p className='text-lg'>FUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inch Laptop Compartment, USB Charging Port & Organizer Pocket for Men Women Boys Girls</p>
                <p className='text-sm'>4.04.0 out of 5 stars (12.1K)</p>
                <p className='text-md'>7K+ bought in past month</p>
                <p className='text-sm'>₹ <span className='text-xl'>699</span> M.R.P: ₹2,000M.R.P: ₹2,000 (65% off)</p>
                <p className='text-md'>FREE delivery Fri, 7 Nov</p>
                <button className='text-md'>Add to cart</button>
            </div>
        </div> */}





       {products && products.length > 0 && (
        products.map((product, index)=>(
             <div key={index} className='w-full h-full flex '>
            <div className='flex w-[50%] justify-center items-center h-80 bg-white'>
                <img
                onClick={()=> navigate(`/search/${name}/${product.id}`)}
                className='p-10'
                 src={product?.images[0]} alt="" srcSet="" />
            </div>
            <div className='w-full h-80 bg-white text-black p-6 space-y-2'> 
                <p className='text-xl font-semibold'>{product.title}</p>
                <p className='text-sm'>{product.rating} out of 5 stars ({product.reviews.length})</p>
                <p className='text-md'>{product.reviews.length + 2}K+ bought in past month</p>
                <p className='p-1 text-center bg-red-700 text-white rounded w-35'>Limited time deal</p>
                <p className='text-sm text-gray-500'><span className='text-xl text-black'>₹{(product.price * 80).toFixed(2)}</span> M.R.P: <span className='line-through text-gray-500'>{(((product.price / 100 * 80) * (product.discountPercentage)) + (product.price * 80)).toFixed(2) } </span> <span className='text-black'>{product.discountPercentage}% off</span></p>
                <p className='text-md'>{product.shippingInformation}</p>
                <button className='text-md'>Add to cart</button>
            </div>
        </div>
        ))
       )}

    </div>
  )
}

export default SearchResults