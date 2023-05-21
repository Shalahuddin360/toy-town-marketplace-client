import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
// import MyToysRow from "./MyToysRow";



const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState("")
    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`,)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])
    console.log(myToys);
    // console.log(myToys["0"].picture)
    // for ( const mt of myToys){
    //     console.log(mt)
    //   }
     
    return (
        <div>
            <h2>This is Toys: {myToys.length}</h2>
          
          
          
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>description</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                              
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>  
                           
                     {/* {

                        myToys?.map(toy=><MyToysRow
                        key={toy._id}
                        ></MyToysRow>)
                     }      */}

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;