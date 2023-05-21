

const AllToy = ({ at }) => {
    console.log(at)
    const { picture, title, status, price, availableQuantity, sellerName ,email } = at
    return (
        <div>
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
                                <img src={picture} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>{title}</td>

                <td>{status}</td>
                <td>{price}</td>
                <td>{availableQuantity}</td>
                <td>

                    <div className="flex items-center space-x-3">

                        <div>
                            <div className="font-bold">{sellerName}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <th>
                    <button className="btn btn-primary btn-xs">Details</button>
                </th>
         
            </tr>
        </div>
    );
};

export default AllToy;