import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const CategoryResults = () => {

    const {name} = useParams();
    console.log(name);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const searchResults = async ()=>{
            try {
                const searchApi = await fetch(`https://dummyjson.com/products/category/${name}`);
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

    const [filter, setFilter] = useState('')

    const handleCheckboxChange = (event) =>{
        const value = event.target.value;
        setFilter(event.target.checked ? value : "")
    }
    
    const filterResults = products.filter((product)=> product.shippingInformation === filter)
    console.log(filterResults);
    

  return (
    <div className='flex h-full w-full m-0'>

        <div className='h-100 w-90 bg-blue-900'>
    <b>Filter By</b>
    {/* <input type="checkbox" name="Ships overnight" id="" /> Ships overnight */}
    {/* <a href="http://"></a> */}
     <label>
        <input
          type="checkbox"
          value="Ships overnight"
          onChange={handleCheckboxChange}
          checked={filter === 'Ships overnight'}
        />
        Ships overnight
      </label>
</div>

<div className='bg-red-900'>
        <div className='w-full flex justify-end'>
            <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/16thJuly/Banner_1.gif" alt="" srcset="" />
        </div>





{filterResults && filterResults.length > 0 && (
    filterResults.map((filterResult, index) => (
        <div key={index} className='w-full flex '>
            <div className='flex w-[50%] justify-center items-center h-80 bg-white'>
                <img
                    onClick={() => navigate(`/search/${name}/${filterResult.id}`)}
                    className='p-10'
                    src={filterResult?.images[0]}
                    alt=""
                />
            </div>
            <div className='w-full h-80 bg-white text-black p-6 space-y-2'>
                <p className='text-xl font-semibold'>{filterResult.title}</p>
                <p className='text-sm'>{filterResult.rating} out of 5 stars ({filterResult.reviews.length})</p>
                <p className='text-md'>{filterResult.reviews.length + 2}K+ bought in past month</p>
                <p className='p-1 text-center bg-red-700 text-white rounded w-35'>Limited time deal</p>
                <p className='text-sm text-gray-500'>
                    <span className='text-xl text-black'>₹{(filterResult.price * 80).toFixed(2)}</span> 
                    M.R.P: <span className='line-through text-gray-500'>{(((filterResult.price / 100 * 80) * (filterResult.discountPercentage)) + (filterResult.price * 80)).toFixed(2)}</span> 
                    <span className='text-black'>{filterResult.discountPercentage}% off</span>
                </p>
                <p className='text-md'>{filterResult.shippingInformation}</p>
                <button className='text-md'>Add to cart</button>
            </div>
        </div>
    ))
)}




       {products && products.length > 0 &&   (
        products.map((product, index)=>(
             <div key={index} className='w-full flex '>
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

    </div>
  )
}

export default CategoryResults
