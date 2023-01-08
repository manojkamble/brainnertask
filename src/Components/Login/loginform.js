import React from "react";
import { useNavigate} from "react-router-dom";


function Login() {

  const [email, setEmail]= React.useState('') 

const [password, setPassword]= React.useState('')

  const Navigation = useNavigate() 

     const handleSubmit = e => {
          e.preventDefault();
       

          if (!email) {
            alert("Email is required");
          } else if (!email) {
            alert("Valid email is required");
          } else if (!password) {
            alert("Password is required");
          } else if (
            email === "admin@gmail.com" &&
           password === "Abcd@1234"
          ) {
            Navigation('/header');
            email= "";
            password = "";
          } else {
            alert("Wrong email or password combination");
          }
        };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-emerald-900 underline">
          Sign in
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              for="email"
              isrequired
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
            onChange={(event)=>setEmail(event.target.value)}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              isrequired
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
             onChange={(event)=>setPassword(event.target.value)}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <a href="\Components\Home\home.js">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
            </a>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
export default Login;
