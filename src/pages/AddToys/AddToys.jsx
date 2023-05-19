
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
        data.skills = selectedOption;
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
        { value: "JavaScript", label: "JavaScript" },
        { value: "C++", label: "C++" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "React", label: "React" },
        { value: "Node", label: "Node" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "Redux", label: "Redux" },
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
                                {...register("picture")}
                                placeholder="Enter Your Toy Picture URL :"
                                defaultValue="Web developer"
                            />
                            <input
                                className="text-input"
                                {...register("title")}
                                placeholder="Choose Your Toy Name :"
                                defaultValue="Web developer"
                            />
                            <input
                                className="text-input"
                                {...register("sellerName", { required: true })}
                                placeholder="Enter Your Seller Name :"
                                defaultValue="salauddin"
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
                            <select className="text-input" {...register("category")}>
                                <option value="Engineering">engineering</option>
                                <option value="Editor">Editor</option>
                                <option value="writer">Writer</option>
                                <option value="Developer">Developer</option>
                            </select>

                            <select className="text-input" {...register("status")}>
                                <option value="scooter">scooter</option>
                                <option value="offline">Offline</option>
                            </select>
                            {/* <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                isMulti
                            /> */}
                            <CreatableSelect
                                className="w-75"
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