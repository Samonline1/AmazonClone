import React, { useEffect, useState } from "react";

const Home = () => {

  // const CategoryOffers = [
  //   {
  //     title: "Revamp your style",
  //     items: [
  //     { name: "Cushion covers, bedsheets & more", img: "image1.jpg", link:"cushion" },
  //     { name: "Figurines, vases & more", img: "image2.jpg", link:"vases"  },
  //     { name: "Home storage", img: "image3.jpg", link:"storage"  },
  //     { name: "Lighting solutions", img: "image4.jpg", link:"lights"  },
  //   ],

  //   link:"Home"
  //   },
  // ]



//   const CategoryOffers = [
//   {
//     title: "Beauty",
//     link: "/category/beauty",
//     items: [
//       { id: 1, title: "Item 1 in Beauty", img: "https://dummyjson.com/image/i1.jpg", link: "/category/beauty" },
//       { id: 2, title: "Item 2 in Beauty", img: "https://dummyjson.com/image/i2.jpg", link: "/category/beauty" },
//       { id: 3, title: "Item 3 in Beauty", img: "https://dummyjson.com/image/i3.jpg", link: "/category/beauty" },
//       { id: 4, title: "Item 4 in Beauty", img: "https://dummyjson.com/image/i4.jpg", link: "/category/beauty" }
//     ]
//   },
//   {
//     title: "Fragrances",
//     link: "/category/fragrances",
//     items: [
//       { id: 101, title: "Item 1 in Fragrances", img: "https://dummyjson.com/image/f1.jpg", link: "/category/fragrances" },
//       { id: 102, title: "Item 2 in Fragrances", img: "https://dummyjson.com/image/f2.jpg", link: "/category/fragrances" },
//       { id: 103, title: "Item 3 in Fragrances", img: "https://dummyjson.com/image/f3.jpg", link: "/category/fragrances" },
//       { id: 104, title: "Item 4 in Fragrances", img: "https://dummyjson.com/image/f4.jpg", link: "/category/fragrances" }
//     ]
//   },
//   {
//     title: "Furniture",
//     link: "/category/furniture",
//     items: [
//       { id: 201, title: "Item 1 in Furniture", img: "https://dummyjson.com/image/u1.jpg", link: "/category/furniture" },
//       { id: 202, title: "Item 2 in Furniture", img: "https://dummyjson.com/image/u2.jpg", link: "/category/furniture" },
//       { id: 203, title: "Item 3 in Furniture", img: "https://dummyjson.com/image/u3.jpg", link: "/category/furniture" },
//       { id: 204, title: "Item 4 in Furniture", img: "https://dummyjson.com/image/u4.jpg", link: "/category/furniture" }
//     ]
//   },
//   {
//     title: "Groceries",
//     link: "/category/groceries",
//     items: [
//       { id: 301, title: "Item 1 in Groceries", img: "https://dummyjson.com/image/g1.jpg", link: "/category/groceries" },
//       { id: 302, title: "Item 2 in Groceries", img: "https://dummyjson.com/image/g2.jpg", link: "/category/groceries" },
//       { id: 303, title: "Item 3 in Groceries", img: "https://dummyjson.com/image/g3.jpg", link: "/category/groceries" },
//       { id: 304, title: "Item 4 in Groceries", img: "https://dummyjson.com/image/g4.jpg", link: "/category/groceries" }
//     ]
//   },
//   {
//     title: "Home-Decoration",
//     link: "/category/home-decoration",
//     items: [
//       { id: 401, title: "Item 1 in Home-Decoration", img: "https://dummyjson.com/image/h1.jpg", link: "/category/home-decoration" },
//       { id: 402, title: "Item 2 in Home-Decoration", img: "https://dummyjson.com/image/h2.jpg", link: "/category/home-decoration" },
//       { id: 403, title: "Item 3 in Home-Decoration", img: "https://dummyjson.com/image/h3.jpg", link: "/category/home-decoration" },
//       { id: 404, title: "Item 4 in Home-Decoration", img: "https://dummyjson.com/image/h4.jpg", link: "/category/home-decoration" }
//     ]
//   },
//   {
//     title: "Kitchen-Accessories",
//     link: "/category/kitchen-accessories",
//     items: [
//       { id: 501, title: "Item 1 in Kitchen-Accessories", img: "https://dummyjson.com/image/k1.jpg", link: "/category/kitchen-accessories" },
//       { id: 502, title: "Item 2 in Kitchen-Accessories", img: "https://dummyjson.com/image/k2.jpg", link: "/category/kitchen-accessories" },
//       { id: 503, title: "Item 3 in Kitchen-Accessories", img: "https://dummyjson.com/image/k3.jpg", link: "/category/kitchen-accessories" },
//       { id: 504, title: "Item 4 in Kitchen-Accessories", img: "https://dummyjson.com/image/k4.jpg", link: "/category/kitchen-accessories" }
//     ]
//   },
//   {
//     title: "Laptops",
//     link: "/category/laptops",
//     items: [
//       { id: 601, title: "Item 1 in Laptops", img: "https://dummyjson.com/image/l1.jpg", link: "/category/laptops" },
//       { id: 602, title: "Item 2 in Laptops", img: "https://dummyjson.com/image/l2.jpg", link: "/category/laptops" },
//       { id: 603, title: "Item 3 in Laptops", img: "https://dummyjson.com/image/l3.jpg", link: "/category/laptops" },
//       { id: 604, title: "Item 4 in Laptops", img: "https://dummyjson.com/image/l4.jpg", link: "/category/laptops" }
//     ]
//   },
//   {
//     title: "Mens-Shoes",
//     link: "/category/mens-shoes",
//     items: [
//       { id: 701, title: "Item 1 in Mens-Shoes", img: "https://dummyjson.com/image/m1.jpg", link: "/category/mens-shoes" },
//       { id: 702, title: "Item 2 in Mens-Shoes", img: "https://dummyjson.com/image/m2.jpg", link: "/category/mens-shoes" },
//       { id: 703, title: "Item 3 in Mens-Shoes", img: "https://dummyjson.com/image/m3.jpg", link: "/category/mens-shoes" },
//       { id: 704, title: "Item 4 in Mens-Shoes", img: "https://dummyjson.com/image/m4.jpg", link: "/category/mens-shoes" }
//     ]
//   }
// ];

const CategoryOffers = [
  {
    title: "Beauty",
    link: "/category/beauty",
    items: [
      { id: null, title: "Fragrances", img: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp", link: "/category/fragrances" },
      { id: null, title: "Skin‑Care", img: "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/1.webp", link: "/category/skin‑care" },
      { id: null, title: "Womens‑Jewellery", img: "", link: "/category/womens‑jewellery" },
      { id: null, title: "Womens‑Shoes", img: "", link: "/category/womens‑shoes" }
    ]
  },
  {
    title: "Electronics",
    link: "/category/electronics",       // Note: “electronics” isn’t a slug listed — you may map to “smartphones” etc.
    items: [
      { id: null, title: "Smartphones", img: "", link: "/category/smartphones" },
      { id: null, title: "Laptops", img: "", link: "/category/laptops" },
      { id: null, title: "Tablets", img: "", link: "/category/tablets" },
      { id: null, title: "Mobile‑Accessories", img: "", link: "/category/mobile‑accessories" }
    ]
  },
  {
    title: "Furniture",
    link: "/category/furniture",
    items: [
      { id: null, title: "Home‑Decoration", img: "", link: "/category/home‑decoration" },
      { id: null, title: "Kitchen‑Accessories", img: "", link: "/category/kitchen‑accessories" },
      { id: null, title: "Groceries", img: "", link: "/category/groceries" },
      { id: null, title: "Mens‑Watches", img: "", link: "/category/mens‑watches" }
    ]
  },
  {
    title: "Groceries",
    link: "/category/groceries",
    items: [
      { id: null, title: "Kitchen‑Accessories", img: "", link: "/category/kitchen‑accessories" },
      { id: null, title: "Home‑Decoration", img: "", link: "/category/home‑decoration" },
      { id: null, title: "Smartphones", img: "", link: "/category/smartphones" },
      { id: null, title: "Womens‑Shoes", img: "", link: "/category/womens‑shoes" }
    ]
  },
  {
    title: "Fashion (Men)",
    link: "/category/mens‑shirts",
    items: [
      { id: null, title: "Mens‑Shirts", img: "", link: "/category/mens‑shirts" },
      { id: null, title: "Mens‑Shoes", img: "", link: "/category/mens‑shoes" },
      { id: null, title: "Mens‑Watches", img: "", link: "/category/mens‑watches" },
      { id: null, title: "Tops", img: "", link: "/category/tops" }
    ]
  },
  {
    title: "Fashion (Women)",
    link: "/category/womens‑dresses",
    items: [
      { id: null, title: "Womens‑Dresses", img: "", link: "/category/womens‑dresses" },
      { id: null, title: "Womens‑Bags", img: "", link: "/category/womens‑bags" },
      { id: null, title: "Womens‑Shoes", img: "", link: "/category/womens‑shoes" },
      { id: null, title: "Jewellery", img: "", link: "/category/womens‑jewellery" }
    ]
  },
  {
    title: "Sports & Accessories",
    link: "/category/sports‑accessories",
    items: [
      { id: null, title: "Sports‑Accessories", img: "", link: "/category/sports‑accessories" },
      { id: null, title: "Sports‑Shoes", img: "", link: "/category/sports‑shoes" /* note: may not exist exactly */ },
      { id: null, title: "Fitness‑Trackers", img: "", link: "/category/fitness‑trackers" /* may need to check slug */ },
      { id: null, title: "Outdoor", img: "", link: "/category/outdoor" /* check slug */ }
    ]
  },
  {
    title: "Kitchen & Home",
    link: "/category/kitchen‑accessories",
    items: [
      { id: null, title: "Kitchen‑Accessories", img: "", link: "/category/kitchen‑accessories" },
      { id: null, title: "Cookware", img: "", link: "/category/cookware" /* check slug */ },
      { id: null, title: "Home‑Décor", img: "", link: "/category/home‑decoration" },
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
          
          <div key={category.items[0].id} className=" w-32 h-35">
            <img className="h-[70%]"
            src={category.items?.[0].img}
              alt=""
            />
            <p>{category.items[0].title} </p>
          </div>

           <div key={category.items[1].id} className=" w-32 h-35">
            <img className="h-[70%]"
                        src={category.items?.[1].img}

              alt=""
            />
            <p>{category.items[1].title} </p>
          </div>

           <div key={category.items[2].id} className=" w-32 h-35">
            <img className="h-[70%]"
                        src={category.items?.[2].img}
              alt=""
            />
            <p>{category.items[2].title} </p>
          </div>

           <div key={category.items[3].id} className=" w-32 h-35">
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
        <div key={product.id} className="h-70 w-40 p-4 bg-white shadow rounded">
          <img src={product.thumbnail} alt={product.title} className="object-cover" />
          <h2 className="mt-2 font-bold text-gray-700">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
        </div>
      ))}
    </div>


    
    </div>
  );
};

export default Home;
