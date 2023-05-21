import { Link } from "react-router-dom";

const MyToysRow = ({toy}) => {
    console.log(toy)
    const {picture,price, availableQuantity,description} = toy
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
                                    {/* <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                         
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{availableQuantity}</div>
                                            <div className="text-sm opacity-50">{price}</div>
                                        </div>
                                    </div> */}
                                </td>
                                <td>{price}</td>
                                <td>
                                     {description < 50 ? { description } : <>{description.slice(0, 50)}...


                                         <Link to={`/recipes/${picture}`}>Read More </Link></>

                                             }
                                 
                                </td>
                                
                                <th>
                                    <button className="btn btn-primary btn-xs">details</button>
                                </th>
                            </tr>  
        </div>
    );
};

export default MyToysRow;