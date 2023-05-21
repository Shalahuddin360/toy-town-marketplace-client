import { useEffect, useState } from "react";
import AllToy from "./AllToy";
// import AllToy from "./AllToy";


const AllToys = () => {
    const [text, setText] = useState(["abc"]);
    const [searchText, setSearchText] = useState("");
   

    useEffect(() => {
        fetch(`https://toy-town-server-smoky.vercel.app/allToys/${text}`)
            .then(res => res.json())
            .then(data => setText(data))

    }, [])

    // console.log(text);

    const handleSearch =()=>{
        fetch(`https://toy-town-server-smoky.vercel.app/toySearchByTitle/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setText(data);
        });
    }

    return (
        <div>
            {/* <h2 className="text-3xl">This is all toys: {text.length}</h2> */}
            <div className="text-center">
                <input  placeholder="Enter Your Test Search :" onChange={(e) => setSearchText(e.target.value)} type="text" className="p-4 rounded-md" /> {" "}

                <button onClick={handleSearch} className="font-bold">Search</button>
            </div>

            <div className="overflow-x-auto">

                <table className="table table-zebra w-full">


                    <thead>
                        <tr>
                            <th>

                                <input type="checkbox" className="checkbox" />

                            </th>
                            <th >Toy Name</th>
                            <th >Sub Category</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                          
                        </tr>
                    </thead>

                    <tbody>

                        {
                            text.map(at => <AllToy
                                key={at._id}
                                at={at}
                            ></AllToy>)
                        }

                    </tbody>

                </table>

            </div>



        </div>
    );
};

export default AllToys;