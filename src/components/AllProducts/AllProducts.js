import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllProducts = () => {
    const [products,setProducts] =useState[]
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/products");
      if(!data.success){
          return toast.error(data.error)
      }
     setProducts[data]
    };
    fetchData();
  }, []);
  return <div></div>;
};

export default AllProducts;
