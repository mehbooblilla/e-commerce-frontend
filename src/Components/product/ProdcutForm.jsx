import React, { memo, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
const ProdcutForm = ({handleCancel,product,getAllProducts}) => {

    const {
        register,
        handleSubmit,
        reset ,
        formState: { errors },
      } = useForm();
      const [loading,setloading]=useState(false)
      const [user,setUser]=useState(null)
      useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem("user"));
        setUser(userData)
      },[])
     
  
      useEffect(() => {
        reset({
          name: product?.name || "",
          price: product?.price || "",
          brand: product?.brand || "",
        });
      }, [product, reset]);
 
    const onSubmit = data =>{
        setloading(true)
        const payload={
            name:data.name,
            price:data.price,
            brand:data.brand,
            userId: user?._id
        }
        if(product){
          axios.put(`http://localhost:5000/update/${product?._id}`,payload).then(response=>{
            console.log(response,'add product response');
            reset()
            handleCancel()
            setloading(false)
            getAllProducts()
          })
        }else{
          axios.post('http://localhost:5000/add-product',payload).then(response=>{
            console.log(response,'add product response');
            reset()
            handleCancel()
            setloading(false)
            getAllProducts()
          })
        }
      
        
      };
      
  return (
    <div>
         <h1 className='text-lg font-bold mb-6'>{product? "Update Product":"Add Product"}</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="gap-2 flex flex-col w-full mb-6">
       
       <div className="gap-2 flex flex-col">
       <label htmlFor="" className="text-lg font-semibold">Product Name<span className='text-red-600'>*</span></label>
       <input  {...register("name",{ required: true })} type="text" className="flex border border-gray-400 p-2 outline-none rounded-md"/>
       {errors.name && <span className="text-red-800">Name is required</span>}
       </div>
       <div className="gap-2 flex flex-col">
       <label htmlFor="" className="text-lg font-semibold">Product Price<span className='text-red-600'>*</span></label>
       <input  {...register("price",{ required: true })} type="number"  className="flex border border-gray-400 p-2 outline-none rounded-md"/>
       {errors.password && <span className="text-red-800">Price is required</span>}
       </div>
       <div className="gap-2 flex flex-col">
       <label htmlFor="" className="text-lg font-semibold">Product Brand<span className='text-red-600'>*</span></label>
       <input   {...register("brand",{ required: true })} type="text"  className="flex border border-gray-400 p-2 outline-none rounded-md"/>
       {errors.password && <span className="text-red-800">Brand is required</span>}
       </div>

    <button disabled={loading}  className="bg-sky-500 p-2 rounded-md text-lg font-semibold mt-8 cursor-pointer">{product? "Update Product":"Add Product"}</button>

       {/* <button className="bg-sky-500 p-2 rounded-md text-lg font-semibold mt-8 cursor-pointer">Add Product<button/> */}
     </form>
    </div>
  )
}

export default memo(ProdcutForm)