// import { FaArrowRight } from "react-icons/fa";
import Rating from 'react-rating'
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Toy = ({ toy }) => {
    const { _id, picture, title, email, sellerName, price, rating, availableQuantity,description,voucher,status } = toy || {}
//    console.log(toy,voucher)
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-48 rounded-md p-2" src={picture} alt="picture" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Name :{sellerName}</p>
                <p>Price :{price}</p>
                <div className='flex'>
                <p>Rating :{rating}</p>
                     <span>
                            <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-yellow-600' />}
                                fullSymbol={<FaStar />}
                            >

                            </Rating>
                        </span>
                </div>
                {/* <p>Quantity :{availableQuantity}</p>
                <p>Sub Category :{status}</p>
                <div className="flex flex-wrap justify-start items-center">
                 {
                    voucher.map((vou,id)=><button
                     key={id}
                    className="btn btn-outline mr-2"
                    >{vou.value}</button> )
                 }
               </div> */}
                <div className="card-actions justify-start text-red-700 cursor-pointer">
                    {/* <FaArrowRight /> */}
                    <button className="btn btn-active btn-primary"> <Link to={`/toy/${_id}`}></Link> </button>
                </div>
            </div>
        </div>
    );
};

export default Toy;