import { useState } from "react";
import './ToysCategory.css'

const ToysCategory = () => {
    const [activeTab,setActiveTab] = useState('remote')
    const handleTabClick =(tabName)=>{
        setActiveTab(tabName);
    }
    return (
        <div className="my-5">
            <h1 className="text-center mt-5 p-5 font-extrabold text-3xl">Available Toys Category </h1>
            <div className="">
                <div className="text-center w-100 m-auto">
                  <div className="tabs d-flex justify-center items-center bg-base-100 drop-shadow-2xl ">
                     <div onClick={()=>handleTabClick('remote')} className={`tabs tabs1 remote ${activeTab == "remote" ? "bg-red-600  text-white" : ""}`}>
                          Remote
                     </div>

                     <div onClick={()=>handleTabClick('offline')} className={`tabs tabs1 offline ${activeTab == "offline" ? "bg-red-600 text-white" : ""}`}>
                          Offline
                     </div>
                     <div onClick={()=>handleTabClick('part-time')} className={`tabs tabs1 part-time ${activeTab == "part-time" ? "bg-red-600 text-white" : ""}`}>
                         Part-Time
                     </div>
                   
                  </div>
                </div>
            </div>
            
        </div>
    );
};

export default ToysCategory;