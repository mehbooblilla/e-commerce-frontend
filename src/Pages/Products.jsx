import React, { useEffect, useRef, useState } from "react";
import { Space, Table, Modal } from "antd";
import ProdcutForm from "../Components/product/ProdcutForm";
import axios from "axios";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import toast from "react-hot-toast";
import axiosInstance from "../Components/Axios/Axios";

const Products = () => {
  const deleteId=useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
 getAllProducts()
  }, []);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleUpdate = (record) => {
    setSelectedProduct(record);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
   
  };
  const handleDeleteProduct = () => {
    axiosInstance.delete(`http://localhost:5000/product/${deleteId.current}`).then(response=>{
      console.log(response,'delete product response');
      if (response.data?.deletedCount==1) {
        setDeleteModalStatus(false);
        getAllProducts()
      }else{
        toast.error("No records found")
      }
    
    })

  };
  const handleDeleteModal = (record) => {
 
    deleteId.current = record._id;
    setDeleteModalStatus(true);

  };
  const getAllProducts=()=>{
    axiosInstance.get("http://localhost:5000/products").then((response) => {
      // console.log(response,'add product response');
      if (response?.data) {
        setProductList(response?.data);
      }
    });
  }



  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      align: "center",
    },

    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle" className="flex justify-center">
          <span
            className="text-green-500 cursor-pointer"
            onClick={() => handleUpdate(record)}
          >
            <CiEdit size={25} />
          </span>
          <span className="text-red-500 cursor-pointer"
           onClick={() => handleDeleteModal(record)}
          >
            <MdOutlineDelete size={25} />
          </span>
        </Space>
      ),
    },
  ];
  return (
    <div className="py-10 px-20 w-full h-full">
      <header className="flex p-4 bg-white mb-10 rounded-lg">
        <div className="flex justify-between w-full">
          <h1 className="text-lg font-bold">Product List</h1>
          <button
            className="bg-sky-500 p-2 rounded text-white font-semibold"
            onClick={showModal}
          >
            Add Product
          </button>
        </div>
      </header>
      <Table columns={columns} dataSource={productList} />
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <ProdcutForm
          handleCancel={handleCancel}
          product={selectedProduct}
          getAllProducts={getAllProducts}
       
        />
      </Modal>
      <Modal
        open={deleteModalStatus}
        title="Delete Product"
        onOk={handleDeleteProduct}
        onCancel={()=>setDeleteModalStatus(false)}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
           
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <p className="text-red-500">Are you sure to delete this product...</p>
       
      </Modal>
    </div>
  );
};

export default Products;

