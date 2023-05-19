import { FaArrowRight } from "react-icons/fa";
const Toy = ({ toy }) => {
    const { _id, picture, title, email, sellerName, price, rating, availableQuantity, category, description ,skills } = toy || {}
    // console.log(toy)
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-48 rounded-md p-2" src={picture} alt="picture" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Name :{sellerName}</p>
                <p>Price :{price}</p>
                <p>Rating :{rating}</p>
                <p>Quantity :{availableQuantity}</p>
                <div className="flex flex-wrap justify-start items-center">
                 {
                    skills.map(skill=><button
                    key={skill}
                    className="btn btn-outline mr-2"
                    >{skill.value}</button> )
                 }
               </div>
                <div className="card-actions justify-end text-red-700 cursor-pointer">
                    <FaArrowRight />
                </div>
            </div>
        </div>
    );
};

export default Toy;