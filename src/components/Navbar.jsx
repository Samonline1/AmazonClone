import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import ReactFlagsSelect from "react-flags-select";

import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState("IN");

  const categories = [
    { name: "All", link: "/all" },
    { name: "Fresh", link: "/fresh", sub: ["Fruit", "Vegetables"] },
    { name: "Electronics", link: "/electronics" },
  ];

  return (
    <div className=" w-full h-24">
      {/* main nav */}
      <nav className="flex h-15 w-full p-4 mt-3 justify-between items-center space-x-5">
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

          <button className="bg-yellow-500 text-white">
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
            <p className="text-sm">Hello, X</p>
            <p className="font-bold">Account & Lists</p>
          </div>
          <div>
            <p className="text-sm">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>
          <div className="text-[40px]">
            <LuShoppingCart />
          </div>
        </div>
      </nav>

      {/* Category */}

      <div>
        <nav className="flex items-center p-4 bg-gray-900">
          {/* <Link to={`/ok/${oka}`} className="link"
      >
       All
      </Link> */}

          {/* <a href={`/ok/${oka}`} className="text-white">
  Go to
</a> */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
