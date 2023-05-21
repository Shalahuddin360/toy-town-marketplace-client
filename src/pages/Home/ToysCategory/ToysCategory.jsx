import { useEffect, useState } from "react";
import './ToysCategory.css'
import Toy from "../Toy/Toy";

const ToysCategory = () => {
    const [activeTab,setActiveTab] = useState('');
    const [toys,setToys] = useState([])
    // console.log(toys)
     useEffect(()=>{
         fetch(`http://localhost:5000/allToys/${activeTab}`)
         .then(res=>res.json())
         .then(data=>{
            setToys(data)
         })
       },[activeTab])
       console.log(toys)
    // const result = toys?.filter(toy=>toy.status ==activeTab)
    //  setToys(result);

    const handleTabClick =(tabName)=>{
        setActiveTab(tabName);
    }
    return (
        <div className="my-8">
            <h1 className="text-center mt-5 p-5 font-extrabold text-3xl mt-5">Available Electronics Toys Category </h1>
            <div className="">
                <div className="text-center w-100 m-auto">
                  <div className="tabs d-flex justify-center items-center bg-base-100 drop-shadow-2xl ">
                     <div onClick={()=>handleTabClick('scooter')} className={`tabs tabs1 scooter ${activeTab == "scooter" ? "bg-red-600  text-white" : ""}`}>
                          Scooter
                     </div>

                     <div onClick={()=>handleTabClick('drone')} className={`tabs tabs1 drone ${activeTab == "drone" ? "bg-red-600 text-white" : ""}`}>
                         Nano Drone
                        
                     </div>
                     <div onClick={()=>handleTabClick('stroller')} className={`tabs tabs1 stroller ${activeTab == "stroller" ? "bg-red-600 text-white" : ""}`}>
                         stroller
                     </div>
                   
                  </div>
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-4">
                {/* <p>this is : {toys.length}</p> */}
              
                {
                    toys?.map(toy=><Toy 
                    key={toy._id}
                    toy={toy}
                    ></Toy>)
                }
             </div>
        </div>
    );
};

export default ToysCategory;