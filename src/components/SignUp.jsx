import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";


function SignUp() {

  const [action, setAction] = useState(true)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    favorite: [],
  });


  const [savedUser, setSavedUser] = useState(
    JSON.parse(localStorage.getItem("users")) || null
  );
console.log(savedUser)



  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

          const users = JSON.parse(localStorage.getItem("users")) || [];


    if (action === false) {
      try {
      // Send fake request to DummyJSON
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          favorite: formData.favorite,
        }),
      });

      const newUser = await res.json();

      users.push(newUser)
      // Save user in localStorage
      localStorage.setItem("users", JSON.stringify(users));

      // Update UI
      setSavedUser(newUser);
      alert("User added and saved locally!");
      navigate(`/`);
    } catch (err) {
      console.error("Error:", err);
    }
    } else {
      const findUser = users.find((u)=> u.username.toLowerCase().includes(formData.username.toLowerCase()) );
      // console.log(findUser.username);
      // console.log(users[0].username);
      // console.log(formData.username);

    const checkPass = users.find((u)=> u.password.toLowerCase().includes(formData.password.toLowerCase()) );
console.log(checkPass.password);

if (findUser && checkPass) {
  alert("logged in!");
      navigate(`/${findUser.username}`)
    if (!users.logged) users.logged = [];
    users.logged.push(findUser.username)

localStorage.setItem("user", JSON.stringify(users))
}

    
      
      

      
    }

    
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setSavedUser(null);
  };

  return (
    <div className="flex flex-col items-center bg-white h-[100vh] w-screen text-black p-5">
         <div className="flex items-center w-30 h-8">
                  <img
                  onClick={()=> navigate(`/`)}

src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"                  alt="Amazon logo"
                    className="w-30 h-8 object-contain flex-shrink-0"
                  />
                </div>

      {!savedUser ? (
        <div className="mt-5 border-1 border-gray-300 rounded-lg w-90 p-5 space-y-3">
            <h2 className="text-xl">Sign in or create account</h2>
          <h3 className="font-bold">Enter mobile number or email</h3>
          <form  className="space-y-3 "
          onSubmit={handleSubmit}>
            <input
            className="border border-gray-500 w-full p-1 rounded"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
    <h3 className="font-bold ">Enter or make your password</h3>

            <input
            className="border border-gray-500 w-full p-1 rounded "
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button 
            className="w-full bg-yellow-700 rounded-xl "
            type="submit">{action === true ? "login" : "Sign Up"}</button>

            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <p>Not Registered? <span className="text-blue-700 hover:text-blue-900" onClick={()=> setAction(!action)}>{action === true ? "SignUp" : "Login"}</span></p>
          </form>
        </div>
      ) : ( <button onClick={handleLogout}>Logout</button>
        // <>
        //   <h3>Welcome, {savedUser.username}</h3>
        //   <pre>{JSON.stringify(savedUser, null, 2)}</pre>
        //   <button onClick={handleLogout}>Logout</button>
        // </>
      )}
    </div>
  );
}

export default SignUp;
