import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const Profile = () => {
  const users = JSON.parse(localStorage.getItem("users"));

  const user = (users && users[0]);


  console.log(user);

  const [show, setShow] = useState(false)

  const navigate = useNavigate();

  const handleLogout = (u) => {
    const deleteUser = u;
    const filterUsers = users.filter((u) => u?.username !== deleteUser);

    localStorage.removeItem("users", JSON.stringify(filterUsers));

    toast.error('User Deleted!!')

    navigate(`/login`);

  
  };



  return (

    <div className='w-screen p-10 text-black'>
      {user ? (
        <div className='space-y-5'>
          <b>
            <h1>Welcome: {user?.name} </h1> </b>

          <div className='border border-gray-400 p-5 rounded-xl mt-5'>
            <p className='font-bold text-lg'>Account details</p>
            <p> Name: {user?.name}</p>
            <p>Username: {user?.username}</p>

            <p>Email Id: {user?.email}</p>
            <p
              onClick={() => setShow(!show)}
            >Password: {show ? user?.password : "*****"}</p>
          </div>
        </div>
      ) : (
        <p>No user found. Please register or login.</p>
      )}

      <div className='border-t border-gray-400 w-full mt-5 p-5'>
        <p className='font-bold text-lg'>Cart: {user?.favorite?.length || "No items!"} Items</p>


      </div>

      <button onClick={(e) => handleLogout(user?.name)}>Logout</button>

    </div>
  );
}

export default Profile