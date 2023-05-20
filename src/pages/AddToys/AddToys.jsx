
import { useForm } from "react-hook-form";
import './AddToys.css'
// import Select from 'react-select';
import CreatableSelect from "react-select/creatable";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const AddToys = () => {
    
    const [selectedOption, setSelectedOption] = useState(null);
    const {user} = useContext(AuthContext)
    const { register,
        handleSubmit,
        // watch,
        formState: { errors }
    } = useForm();
    const onSubmit = data => {
        data.voucher = selectedOption;
        // send data to the server 

        fetch('http://localhost:5000/postToy', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        console.log(data);
    }
    console.log(selectedOption)
    const options = [
        { value: "Voucher $2 Off", label: "Voucher $2 Off" },
        { value: "Voucher $3 Off", label: "Voucher $3 Off" },
        { value: "Voucher $3 Off", label: "Voucher $1 Off" },
        { value: "Voucher $5 Off", label: "Voucher $5 Off" },
        { value: "Voucher $4 Off", label: "Voucher $4 Off" },
        { value: "Voucher $6 Off", label: "Voucher $6 Off" },
        { value: "Voucher $7 Off", label: "Voucher $7 Off" },
        { value: "Voucher $8 Off", label: "Voucher $8 Off" },
    ];
    return (
        <div>
            <div className="add-job-container">
                <div className="add-job row-auto">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input
                                className="text-input"
                                {...register("picture",{ required: true })}
                                placeholder="Enter Your Toy Picture URL :"
                                
                            />
                            <input
                                className="text-input"
                                {...register("title",{ required: true })}
                                placeholder="Choose Your Toy Name :"
                               
                            />
                            <input
                                className="text-input"
                                {...register("sellerName", { required: true })}
                                placeholder="Enter Your Seller Name :"
                                defaultValue="Shalahuddin"
                            />
                            <input
                                className="text-input"
                                {...register("email", { required: true })}
                                placeholder="Enter Your Seller Email :"
                                type="email"
                                value={user?.email}
                            />
                            <input
                                className="text-input"
                                {...register("price", { required: true })}
                                placeholder="Enter Your Toy Price:"
                                type="number"
                            />
                            <input
                                className="text-input"
                                {...register("rating", { required: true })}
                                placeholder="Enter Your Toy Rating:"
                                type="number"
                            />
                            <input
                                className="text-input"
                                {...register("availableQuantity", { required: true })}
                                placeholder="Enter Your Toy Available Quantity:"
                                type="number"
                            />
                            <select className="text-input" {...register("size",{ required: true })} >
                          
                                <option value="D8">D8</option>
                                <option value="D6">D6</option>
                                <option value="A7">A7</option>
                                <option value="A5">A5</option>
                            </select>

                            <select className="text-input" {...register("status",{ required: true })}>
                                <option value="scooter">scooter</option>
                                <option value="drone">drone</option>
                                <option value="stroller">stroller</option>
                            </select>
                            {/* <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                isMulti
                            /> */}
                            <CreatableSelect 
                                className="w-75 text-blue-800 bg-amber-500"
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                isMulti
                            />
                            <input
                                className="text-input"
                                {...register("description", { required: true })}
                                placeholder="Enter Your description:"
                                type="text"
                            />

                            <input className="submit-btn" value="PostToy" type="submit" />
                        </form>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToys;