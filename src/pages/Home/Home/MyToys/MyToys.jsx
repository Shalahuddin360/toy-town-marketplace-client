import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import MyToysRow from "./MyToysRow";



const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`https://toy-town-server-smoky.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])
    // console.log(myToys);  
    return (
        <div>
            <h2>This is Toys: {myToys.length}</h2>



            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-50 mx-auto ">

                        <thead className="w-50">
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th  >quantity</th>
                                <th>price</th>
                                <th>discription</th>
                                <th>Details</th>

                            </tr>
                        </thead>
                        <tbody className="w-full">

                            {

                                myToys?.map(toy => <MyToysRow
                                    key={toy._id}
                                    toy={toy}
                                ></MyToysRow>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;