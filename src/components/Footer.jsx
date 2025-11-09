import React from 'react'


const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full bg-gray-800 text-white p-8 space-y-10'>

<div className="flex gap-15">
  {/* Get to Know Us */}
  <div className="space-y-2">
    <p><b>Get to Know Us</b></p>
    <ul>
      <li><a href="/">About Amazon</a></li>
      <li><a href="/">Careers</a></li>
      <li><a href="/">Press Releases</a></li>
      <li><a href="/">Amazon Science</a></li>
    </ul>
  </div>

  {/* Connect with Us */}
  <div className="space-y-2">
    <p><b>Connect with Us</b></p>
    <ul>
      <li><a href="/">Facebook</a></li>
      <li><a href="/">Twitter</a></li>
      <li><a href="/">Instagram</a></li>
    </ul>
  </div>

  {/* Make Money with Us */}
  <div className="space-y-2">
    <p><b>Make Money with Us</b></p>
    <ul>
      <li><a href="/">Sell on Amazon</a></li>
      <li><a href="/">Sell under Amazon Accelerator</a></li>
      <li><a href="/">Protect and Build Your Brand</a></li>
      <li><a href="/">Amazon Global Selling</a></li>
      <li><a href="/">Supply to Amazon</a></li>
      <li><a href="/">Become an Affiliate</a></li>
      <li><a href="/">Fulfilment by Amazon</a></li>
      <li><a href="/">Advertise Your Products</a></li>
      <li><a href="/">Amazon Pay on Merchants</a></li>
    </ul>
  </div>

  {/* Let Us Help You */}
  <div className="space-y-2">
    <p><b>Let Us Help You</b></p>
    <ul>
      <li><a href="/">Your Account</a></li>
      <li><a href="/">Returns Centre</a></li>
      <li><a href="/">Recalls and Product Safety Alerts</a></li>
      <li><a href="/">100% Purchase Protection</a></li>
      <li><a href="/">Amazon App Download</a></li>
      <li><a href="/">Help</a></li>
    </ul>
  </div>
</div>


        <div className="flex justify-center w-full h-8 border-t border-t-gray-700 p-5 ">
            <a href="/">

        <img 
         
            src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
          alt="Amazon logo"
          className="w-30 h-8 object-contain flex-shrink-0"
        />
        </a>
      </div>


    </div>
  )
}

export default Footer