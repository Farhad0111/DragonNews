import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
//import { result } from "postcss";


const Register = () => {
    const {createNewUser,setUser}=useContext(AuthContext)


    const handleSubmit=(e)=>{
        e.preventDefault();
        //get form data
        const form=new FormData(e.target);
        const name=form.get("name");
        const email=form.get("email");
        const photo=form.get("photo");
        const password=form.get("password");
        console.log({name,email,photo,password});
        
        createNewUser(email,password)
        .then((result)=>{
            const user=result.user;
            setUser(user);
            console.log(user);
        })
        .catch((error)=>{
            const errorCode=error.code;
            const errorMessage=error.message;
            console.log(errorCode,errorMessage);
        });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                    </div>
                    {/* Name Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        
                        <input 
                        name="name"
                        type="text" 
                        placeholder="Your Name" 
                        className="input input-bordered" 
                        required />

                    </div>
                    {/* Photo URL Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        
                        <input 
                        type="url" 
                        name="photo"
                        placeholder="Photo URL" 
                        className="input input-bordered" 
                        required />

                    </div>
                    {/* Email Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input 
                        name="email"
                        type="email" 
                        placeholder="email" 
                        className="input input-bordered" 
                        required />
                    
                    </div>
                    {/* Password Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        
                        <input 
                        name="password"
                        type="password" 
                        placeholder="password" 
                        className="input input-bordered" 
                        required />
                        
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    {/* Register Button */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Already have an account? <Link className="text-red-500" to="/auth/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
