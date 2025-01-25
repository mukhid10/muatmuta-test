'use client'
import { useEffect, useState } from "react";
import CCard from "./component/organisme/CCard";
import { useGetData } from "./consumAPI/api";
import { useRouter } from "next/navigation";
import { UseAddData, UseAddProduct } from "./zustand/store";
import CInputSearch from "./component/atoms/CInputSearch";

export default function Home() {
  const route = useRouter();
  const {addData} = UseAddData();
  const {dataAddProduct} = UseAddProduct()
  const {getData} = useGetData();

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(()=>{
    handleGetData();
  },[])

  useEffect(()=>{
    handleNewData()
  },[dataAddProduct])


  const handleGetData = async()=>{
    let a = await getData();

    if (a.data.game_indices) {
      let arr = []
      a.data.game_indices.forEach((item, index) => {
        if (index%2 == 0) {       
          arr.push({
            label: item?.version?.name,
            stock: item?.game_index,
            price: 10000,
            desc: '',
            image: "https://images.unsplash.com/photo-1616196334218-caffdc9b2317?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          })
        } else {
          arr.push({
            label: item?.version?.name,
            stock: item?.game_index,
            price: 10000,
            desc: '',
            image: "https://images.unsplash.com/photo-1708032563840-e77e426411dd?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          })
        }
      });
      setData(arr);    
    }
  }

  const handleNewData = () => {
    if (dataAddProduct.name) {
      setData(prev => [
        {
          label: dataAddProduct.name,
          image: dataAddProduct.image,
          stock: dataAddProduct?.stock
        },
        ...prev
      ]);
    }
  };

  const handleDetailProduct = (item)=>{
    addData(item)
    route.push(`/detailProduct/${item?.label}`)
  }

  const handleSearch = ()=>{
    let arr = [];

    if (data.find((a)=> a.label == search)) {   
      arr.push(data.find((a)=> a.label == search))
    }else{
      handleGetData();
    }

    setData(arr);
    
  }

  
  return (
    <div className="w-full lg:px-16 md:px-16 sm:px-0">
      <div className="flex justify-between items-center mt-5 mb-3">
        <h1 className="text-3xl font-semibold italic text-gray-900">List Produck</h1>

        <CInputSearch value={search} setValue={(e)=>setSearch(e.target.value)} action={handleSearch}/>
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-4 w-fit h-fit">
        {
          data.length !== 0 && data.map((item, index)=>(
            <div className="w-fit" key={index}>
              <CCard label={item?.label || ""} price={item?.stock} stock={item?.stock} image={item.image}
                action={()=>handleDetailProduct(item)}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}
