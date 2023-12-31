import { Link } from 'react-router-dom';
import img from '../../assets/login/signup.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const [success,setSuccess] = useState("");
    const [error,setError] = useState("")
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
         console.log(name,email,password,photo); 
         setError("")
         setSuccess("")
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            setSuccess("user signup successfully")
            event.target.reset();
        })
        .catch(error=>{
            console.log(error)
            setError("error.message")
        })
        }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className=" w-1/2 mr-12" >
                <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center">SignUp!</h1>
                    <form onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name : " className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter Your Photo URL : " className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign UP" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>Already Have An Account ? Please <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
                    <p className='font-bold text-red-600'>{success}</p>
                    <p className='font-bold text-red-600'>{error}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;