import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading,setloading]=useState(false)
  const { user, setUser } = useContext(AuthContext);
  const navigete=useNavigate()
  const onSubmit = data =>{
    setloading(true)
    axios.post('http://localhost:5000/login',data).then(response=>{
      console.log(response,'login response');
      if(response.data.auth){
        localStorage.setItem('user',JSON.stringify(response.data.user))
        localStorage.setItem('token',JSON.stringify(response.data.auth))
        setUser(response.data.user)
        // setTimeout(() => {
        //   window.location.reload()
        //  }, 2000);
   
      }else{
        toast.error(response.data.message)
      }
      navigete('/products')
      setloading(false)
    })
    
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[400px] min-h-[500px] h-auto bg-white shadow-lg shadow-black rounded-xl">
        <div className="flex  flex-col items-center gap-10 p-8  h-full">
          <h1 className="flex text-2xl font-bold">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="gap-2 flex flex-col w-full">
       
            <div className="gap-2 flex flex-col">
            <label htmlFor="" className="text-lg font-semibold">Email</label>
            <input  {...register("email",{ required: true })} type="email" className="flex border border-gray-400 p-2 outline-none rounded-md"/>
            {errors.email && <span className="text-red-800">Email is required</span>}
            </div>
            <div className="gap-2 flex flex-col">
            <label htmlFor="" className="text-lg font-semibold">Password</label>
            <input  {...register("password",{ required: true })} type="password"  className="flex border border-gray-400 p-2 outline-none rounded-md"/>
            {errors.password && <span className="text-red-800">Password is required</span>}
            </div>

         

            <input type="submit" className="bg-sky-500 p-2 rounded-md text-lg font-semibold mt-8 cursor-pointer" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
