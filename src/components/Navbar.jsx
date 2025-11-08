import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import ReactFlagsSelect from "react-flags-select";
import { LuShoppingCart } from "react-icons/lu";
import { Link, useNavigate, useParams } from "react-router-dom";

const Navbar = () => {
  const users = JSON.parse(localStorage.getItem("users"));
  //  console.log(users[0]);
  //   const userDetails = users.find((u)=> u.username === username)
  // // console.log(userDetails.username);
  // const User = userDetails.username;

  console.log(users[0].username);
  const user = users[0].username;

  const [input, setInput] = useState("");
  const [selected, setSelected] = useState("IN");
  const [show, setShow] = useState(false);

  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skin-care",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  const navigate = useNavigate();

  const searchProducts = (search) => {
    navigate(`/search/${search}`);
  };

  return (
    <div className="relative w-full h-full">
      {show && (
        <div
          className={`w-90 h-screen absolute z-50 bg-gray-800 text-white
    transition-opacity duration-300 ease-in-out
    ${show ? "translate-x-0 opacity-100" : "opacity-0"}
`}
        >
          <div
            className="flex font-bold items-center flex h-13 w-full bg-gray-900 text-white px-10 gap-2 text-xl"
            onClick={() => navigate(`/profile`)}
          >
            <img
              className="w-7 h-7"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
              alt=""
              srcset=""
            />
            <h3>Hello, {user || "Login"}</h3>
            <p
              className="flex justify-center items-center absolute right-[-50px] p-3 border h-10 w-10 rounded bg-black/50"
              onClick={() => setShow(false)}
            >
              X
            </p>
          </div>
          <div className="flex flex-col relative h-screen z-50 bg-white text-gray-900 p-10 w-full gap-5">
            <b className="text-lg">Trending</b>
            <a className="text-gray-500" href={`/category/toy`}>
              Toy
            </a>
            <a className="text-gray-500" href={`/category/toy`}>
              Toy
            </a>
            <a className="text-gray-500" href={`/category/toy`}>
              Toy
            </a>
            <b className="text-lg">Shop by category</b>
            {categories.splice(5, 10).map((category) => (
              <a
                key={category}
                href={`/category/${category}`}
                className="text-gray-500"
              >
                {category.replace(/-/g, "        ", ">")}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* main nav */}
      <nav className="flex sticky top-0 z-20 h-full w-full p-4 items-center space-x-5 bg-black">
        {/* <div className='flex w-full w-62 h-10' >
         <img className='w-full h-full object-center flex-shrink-0' src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png" alt="" srcSet="" /> 
        </div> */}
        {/* 
        <div className="flex items-center">
 <img
  src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
  alt="Amazon logo"
  className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto object-contain"
/>
</div> */}

        <div className="flex items-center w-32 h-12">
          <img
            onClick={() => navigate(`/`)}
            src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
            alt="Amazon logo"
            className="w-32 h-12 object-contain flex-shrink-0"
          />
        </div>

        <div className="w-55">
          <p className="text-sm">Delivering to Mumbai</p>
          <div className="flex w-full">
            <SlLocationPin />
            <p className="font-bold">Update location</p>
          </div>
        </div>

        <div className="flex w-[50%]  bg-white rounded-md outline-none border-none text-black">
          <input
            className=" w-full p-2 appearance-none outline-none border-none bg-transparent focus:ring-0 focus:outline-none focus:border-none text-black"
            type="search"
            placeholder="Search Amazon.in"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={() => searchProducts(input)}
            className="rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none text-black font-bold"
          >
            <BsSearch />
          </button>
        </div>

        <div className="flex w-100 space-x-3">
          <div className="text-white ">
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              countries={["IN", "US", "GB", "FR", "DE", "ES"]} // Optional: limit to certain countries
              customLabels={{
                IN: "EN",
                US: "EN",
                GB: "EN",
                FR: "FR",
                DE: "DE",
                ES: "ES",
              }}
              showSelectedLabel={true}
              showSecondarySelectedLabel={false}
              fullWidth={false}
              selectButtonClassName="!border-0 !bg-transparent !shadow-none hover:!bg-transparent focus:!outline-none !text-white"
            />

            {/* <ReactFlagsSelect
             className='w-20 ouline-none border-none'
             selectButtonClassName="menu-flags-button"
             fullWidth={false}
 placeholder="Select Language"           
            showOptionLabel={false}
            showSecondarySelectedLabel={false}
            showSelectedLabel={false}
            customLabels={"US"}
    selected={selected}
    onSelect={(code) => setSelected(code)}
  /> */}
          </div>
          <div>
            <p onClick={() => navigate(`/login`)} className="text-sm ">
              Hello, {user || "Login"}
            </p>
            <p className="font-bold">Account & Lists</p>
          </div>
          <div>
            <p className="text-sm">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>
          <div onClick={() => navigate(`/cart`)} className="text-[40px]">
            <LuShoppingCart />
          </div>
        </div>
      </nav>

      {/* Category */}

      <nav className="flex items-center p-4 gap-4 bg-gray-900">
        {/* <Link to={`/ok/${oka}`} className="link"
      >
       All
      </Link> */}

        {/* <a href={`/ok/${oka}`} className="text-white">
  Go to
</a> */}

        <p className="text-white" onClick={() => setShow(true)}>
          All
        </p>
        {categories.splice(0, 5).map((category) => (
          <a
            key={category}
            href={`/category/${category}`}
            className="text-white"
          >
            {category.replace(/-/g, "        ")}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;

// learn JavaScript string methods
