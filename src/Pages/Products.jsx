import React, { useEffect, useState } from 'react'
import { Space, Table, Tag,Modal } from 'antd';
import ProdcutForm from '../Components/product/ProdcutForm';
import axios from 'axios';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
   
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>UPdate</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productList,setProductList]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/products').then(response=>{
      console.log(response,'add product response');
      if(response?.data){
        setProductList(response?.data)
      }

    })
  },[])
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='py-10 px-20 '>
       <header className='flex p-4 bg-white mb-10 rounded-lg'>
        <div className='flex justify-between w-full'>
            <h1 className='text-lg font-bold'>Product List</h1>
            <button className='bg-sky-500 p-2 rounded text-white font-semibold' onClick={showModal}>Add Product</button>
        </div>
       </header>
        <Table columns={columns} dataSource={productList} />
        <Modal  open={isModalOpen} onCancel={handleCancel} footer={null}>
        <ProdcutForm handleCancel={handleCancel}/>
      </Modal>
    </div>
  )
}

export default Products