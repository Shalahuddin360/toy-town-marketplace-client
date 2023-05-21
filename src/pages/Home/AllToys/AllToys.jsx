import { useEffect, useState } from "react";
// import AllToy from "./AllToy";


const AllToys = () => {
    const [activeTab,setActiveTab] = useState({});
    useEffect(()=>{
        fetch(`https://toy-town-server-smoky.vercel.app/allToys/${activeTab}`)
        .then(res=>res.json())
        .then(data=>setActiveTab(data))

    },[])
    console.log(activeTab);
 
    return (
        <div>
             <h2>{activeTab.length}</h2> 
            <div>
                
            </div>
        </div>
    );
};

export default AllToys;