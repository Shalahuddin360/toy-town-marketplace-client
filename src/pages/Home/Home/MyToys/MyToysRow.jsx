import { Link } from "react-router-dom";

const MyToysRow = ({ toy }) => {
    console.log(toy)
    const { picture, price, availableQuantity, description } = toy
    return (
        <div>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    {availableQuantity}

                </td>
                <td>{price}</td>
                <td>
                    {description < 50 ? { description } : <>{description.slice(0, 50)}...


                        <Link to={`/recipes/${picture}`}>Read More </Link></>

                    }

                </td>

                <th>
                    {/* The button to open modal */}
                    <label htmlFor="my-modal-3" className="btn">Edit </label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                            <p className="py-4">You have been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        </div>
                    </div>
                    {/* <button htmlFor="my-modal-3"  className="btn btn-primary btn-xs border ">Edit</button> */}
                  
                </th>
                <th>
                    <button className="btn btn-primary btn-xs border">Delete</button>
                </th>
            </tr>
        </div>
    );
};

export default MyToysRow;