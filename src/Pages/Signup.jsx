import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[400px] min-h-[500px] h-auto bg-white shadow-lg shadow-black rounded-xl">
        <div className="flex  flex-col items-center gap-10 p-8  h-full">
          <h1 className="flex text-2xl font-bold">Signup</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="gap-2 flex flex-col w-full">
            <div className="gap-2 flex flex-col">
            <label htmlFor="" className="text-lg font-semibold">Full Name</label>
            <input  {...register("name",{ required: true })} className="flex border border-gray-400 p-2 outline-none rounded-md"/>
            {errors.name && <span className="text-red-800 ">Name is required</span>}
            </div>
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

         

            <input type="submit" className="bg-sky-500 p-2 rounded-md text-lg font-semibold mt-4" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
