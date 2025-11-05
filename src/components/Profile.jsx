import React from 'react'

const Profile = () => {
      const user = JSON.parse(localStorage.getItem("user"));

  return (
   
 <div className='w-screen p-10 text-black'>
      {user ? (
        <>
          <h2>Welcome {user?.username}</h2>
          <p>User ID: {user?.id}</p>
        </>
      ) : (
        <p>No user found. Please register or login.</p>
      )}
    </div>
  );
}

export default Profile