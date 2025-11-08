import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {

  const navigate = useNavigate();

const CategoryOffers = [
  {
    title: "Beauty",
    link: "/category/beauty",
    items: [
      { id: null, title: "Fragrances", img: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp", link: "/category/fragrances" },
      { id: null, title: "Skin‑Care", img: "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/1.webp", link: "/category/skin-care" },
      { id: null, title: "Womens‑Jewellery", img: "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/1.webp", link: "/category/womens-jewellery" },
      { id: null, title: "Womens‑Shoes", img: "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/1.webp", link: "/category/womens-shoes" }
    ]
  },
  {
    title: "Electronics",
    link: "/category/electronics",       // Note: “electronics” isn’t a slug listed — you may map to “smartphones” etc.
    items: [
      { id: null, title: "Smartphones", img: "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp", link: "/category/smartphones" },
      { id: null, title: "Laptops", img: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp", link: "/category/laptops" },
      { id: null, title: "Tablets", img: "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp", link: "/category/tablets" },
      { id: null, title: "Mobile-Accessories", img: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/1.webp", link: "/category/mobile-accessories" }
    ]
  },
  {
    title: "Furniture",
    link: "/category/furniture",
    items: [
      { id: null, title: "Home‑Decoration", img: "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/1.webp", link: "/category/home-decoration" },
      { id: null, title: "Kitchen‑Accessories", img: "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/1.webp", link: "/category/kitchen-accessories" },
      { id: null, title: "Groceries", img: "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp", link: "/category/groceries" },
      { id: null, title: "Mens‑Watches", img: "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp", link: "/category/mens-watches" }
    ]
  },
  {
    title: "Groceries",
    link: "/category/groceries",
    items: [
      { id: null, title: "Kitchen‑Accessories", img: "", link: "/category/kitchen-accessories" },
      { id: null, title: "Home‑Decoration", img: "", link: "/category/home-decoration" },
      { id: null, title: "Smartphones", img: "", link: "/category/smartphones" },
      { id: null, title: "Womens‑Shoes", img: "", link: "/category/womens-shoes" }
    ]
  },
  {
    title: "Fashion (Men)",
    link: "/category/mens‑shirts",
    items: [
      { id: null, title: "Mens‑Shirts", img: "", link: "/category/mens-shirts" },
      { id: null, title: "Mens‑Shoes", img: "", link: "/category/mens-shoes" },
      { id: null, title: "Mens‑Watches", img: "", link: "/category/mens-watches" },
      { id: null, title: "Tops", img: "", link: "/category/tops" }
    ]
  },
  {
    title: "Fashion (Women)",
    link: "/category/womens‑dresses",
    items: [
      { id: null, title: "Womens‑Dresses", img: "", link: "/category/womens-dresses" },
      { id: null, title: "Womens‑Bags", img: "", link: "/category/womens-bags" },
      { id: null, title: "Womens‑Shoes", img: "", link: "/category/womens-shoes" },
      { id: null, title: "Jewellery", img: "", link: "/category/womens-jewellery" }
    ]
  },
  {
    title: "Sports & Accessories",
    link: "/category/sports‑accessories",
    items: [
      { id: null, title: "Sports‑Accessories", img: "", link: "/category/sports-accessories" },
      { id: null, title: "Sports‑Shoes", img: "", link: "/category/sports-shoes" /* note: may not exist exactly */ },
      { id: null, title: "Fitness‑Trackers", img: "", link: "/category/fitness-trackers" /* may need to check slug */ },
      { id: null, title: "Outdoor", img: "", link: "/category/outdoor" /* check slug */ }
    ]
  },
  {
    title: "Kitchen & Home",
    link: "/category/kitchen‑accessories",
    items: [
      { id: null, title: "Kitchen‑Accessories", img: "", link: "/category/kitchen-accessories" },
      { id: null, title: "Cookware", img: "", link: "/category/cookware" /* check slug */ },
      { id: null, title: "Home‑Décor", img: "", link: "/category/home-decoration" },
      { id: null, title: "Lighting", img: "", link: "/category/lighting" /* check slug */ }
    ]
  }
];

const [products, setProducts] = useState([])

useEffect(() => {

  const trendingProducts = async () => {
      
  try {
    const res = await fetch(`https://dummyjson.com/products?limit=30`);
    const productData = await res.json();
    setProducts(productData.products);
    console.log(productData.products);
    
  } catch (error) {
    console.log("no products!!");
  }

  }

  trendingProducts();
}, [])

// setProducts(data.products)

  return (
    <div className="h-[100vh] w-full h-full overflow-x-hidden box-border flex flex-col items-center">
     
      <div className="flex w-full  [&::-webkit-scrollbar]:hidden scrollbar-none scroll-Ani ">
        
        <img
          className="w-full"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_1x-toys._CB582765723_.jpg"
          alt=""
        />

        <img
          className="w-full"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg"
          alt=""
        />
        <img
          className="w-full"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/2025/LawnGarden/OCTOBER2025/GATEWAY/30thOCT/Door-and-bed-nets-GW-Hero-Pc._CB779327545_.jpg"
          alt=""
        />
        <img
          className="w-full"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Jupiter/61/updated/PC_PB_Leadup_ASIN_Date._CB801963094_.jpg"
          alt=""
        />
        <img
          className="w-full"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg"
          alt=""
        />
        <img
          className="w-full"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/yesbank/Shampoos__conditioners_pc._CB796616147_.png"
          alt=""
        />

 
      </div>

<div className=" absolute bottom-0 h-60 w-full bg-gradient-to-t from-gray-200 to-[rgba(227,230,230]">

</div>


  <div className="z-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-10 w-[95%] overflow-visible justify-center items-center mt-[-20%]">


{CategoryOffers && CategoryOffers.map((category, index) =>  (


      <div key={index} 
      className="w-70 lg:w-full p-5 bg-white text-black">
        <p className="text-xl font-bold w-[80%]">{category.title}</p>


        <div className="grid grid-cols-2 justify-center h-[90%] mt-2 gap-2 text-sm text-gray-400">
          
          <div key={category.items[0].id} className=" w-32 h-35"
onClick={()=> navigate(category.items[0].link)}
          >
            <img className="h-[70%]"
            src={category.items?.[0].img}
              alt=""
            />
            <p>{category.items[0].title} </p>
          </div>

           <div 
           onClick={()=> navigate(category.items[1].link)}
key={category.items[1].id} className=" w-32 h-35">
            <img className="h-[70%]"
                        src={category.items?.[1].img}

              alt=""
            />
            <p>{category.items[1].title} </p>
          </div>

           <div
           onClick={()=> navigate(category.items[2].link)}
key={category.items[2].id} className=" w-32 h-35">
            <img className="h-[70%]"
                        src={category.items?.[2].img}
              alt=""
            />
            <p>{category.items[2].title} </p>
          </div>

           <div
           onClick={()=> navigate(category.items[3].link)}

key={category.items[3].id} className=" w-32 h-35">
            <img className="h-[70%]"
                        src={category.items?.[3].img}
              alt=""
            />
            <p>{category.items[3].title} </p>
          </div>

        


        </div>

       <div className="mt-4">
        <a href={category.link} className="text-blue-500 hover:underline">
          Explore all
        </a>
      </div>

        
      </div>

)
)}


 </div>

          <p className="realtive w-[95%] text-3xl text-black font-bold w-[80%] py-10">Products</p>


 <div className="grid grid-cols-5 lg:grid-cols-6 gap-6 w-[95%] ">

      {products.map(product => (
        <div
        onClick={()=> navigate(`/search/${product.name}/${product.id}`)}

        key={product.id} className="h-70 w-40 p-4 bg-white shadow rounded">
          <img src={product.thumbnail} alt={product.title} className="object-cover" />
          <h2 className="mt-2 font-bold text-gray-700">{product.title}</h2>
          <p className="text-gray-600">₹{(product.price * 80).toFixed(1)}</p>
        </div>
      ))}
    </div>



    
    </div>
  );
};

export default Home;
