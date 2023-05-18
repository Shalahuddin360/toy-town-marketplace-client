import { useEffect, useState } from "react";
import GallaryCard from "./GallaryCard";

const Gallery = () => {
    const [toys,setToys] = useState([])

    useEffect(()=>{
        fetch('toys.json')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])

    return (
    <div className="mt-4">
         <div className="text-center">
            <h3 className="text-orange-600 text-5xl font-bold ">Toys Gallery </h3>
            <p>Various categories of children is toys including small toys are shown below in card form</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                toys.map(toy=><GallaryCard 
                key={toy.id}
                toy={toy}
                ></GallaryCard>)
            }
         </div>
    </div>
    );
};

export default Gallery;