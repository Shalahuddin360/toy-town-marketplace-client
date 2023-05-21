import { useEffect, useState } from "react";
import AllToy from "./AllToy";
// import AllToy from "./AllToy";


const AllToys = () => {
    const [text, setText] = useState(["abc"]);

    useEffect(() => {
        fetch(`http://localhost:5000/allToys/${text}`)
            .then(res => res.json())
            .then(data => setText(data))

    }, [])
    console.log(text);

    return (
        <div>
            <h2>This is all toys: {text.length}</h2>

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