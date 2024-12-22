import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    const { handleEmailPassRegister, handleManageUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.state || '/';

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // validation

        const uppercaseValidation = /[A-Z]/;
        const lowercaseValidation = /[a-z]/;

        if (password.length < 6) {
            return toast.error('Password must be 6 characters or longer');
        }
        if (!uppercaseValidation.test(password)) {
            return toast.error('Password must contain at least one uppercase letter');
        }
        if (!lowercaseValidation.test(password)) {
            return toast.error('Password must contain at least one lowercase letter');
        }

        console.log(name, email, photo, password)
        handleEmailPassRegister(email, password)
            .then(res => {
                console.log(res);

                handleManageUser(name, photo)
                    .then(res => {
                        console.log(res);
                        form.reset();
                        navigate(pathname);
                        toast.success('Successfully Registered');
                    });
            })
            .catch(error => {
                toast.error(`User already exists: ${error.message}`);
            });

    }
    return (
        <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <form onSubmit={handleRegister} className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
                <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
                    SignUp Form
                </h1>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-semibold text-gray-600"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-semibold text-gray-600"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-semibold text-gray-600"
                    >
                        Photo URL
                    </label>
                    <input
                        type="url"
                        name="photo"
                        placeholder="Photo URL"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-semibold text-gray-600"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                </div>
                <div className="flex items-center justify-between mb-6">
                    <Link to="/forgot-password" className="text-sm text-violet-500 hover:underline">
                        Forget Password?
                    </Link>
                </div>
                <input type="submit" className="w-full py-2 mb-4 text-sm font-semibold text-white bg-violet-500 rounded-md hover:bg-violet-600" value="Register" />
                <Toaster></Toaster>
                <p className="text-sm text-center text-gray-600">
                    You Have Already Account?{" "}
                    <Link to="/login" className="font-semibold text-violet-500 hover:underline">
                        Login
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default Register;