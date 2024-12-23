import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const {googleSingUp,handleSignEmailPassword}= useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.state || '/';

    const handleGoogleLoginBtn = () => {
        googleSingUp()
        .then(result => {
            navigate(pathname);
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        handleSignEmailPassword(email, password)
        .then(res => {
            navigate(pathname);
            console.log(res);
            toast.success('Successfully Logged In');
        })
        .catch(error => {
            toast.error(`Email or Password didn't match: ${error.message}`);
        });
    }
    return (
        <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <form onSubmit={handleSignIn} className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
                <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
                    Login
                </h1>
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
                <button
                    type="submit"
                    className="w-full py-2 mb-4 text-sm font-semibold text-white bg-violet-500 rounded-md hover:bg-violet-600"
                >
                    Login
                </button>
                <Toaster></Toaster>
                <button
                    onClick={handleGoogleLoginBtn}
                    type="button"
                    className="w-full flex items-center justify-center gap-2 py-2 mb-4 text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
                >
                    <FaGoogle className="text-red-500" /> Login with Google
                </button>
                <p className="text-sm text-center text-gray-600">
                    Not a Member?{" "}
                    <Link to="/register" className="font-semibold text-violet-500 hover:underline">
                        Register
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default Login;